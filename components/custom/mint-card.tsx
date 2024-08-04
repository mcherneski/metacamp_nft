'use client'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
import { SuccessDialog } from "@/components/custom/success-dialog"
import { Button } from "../ui/button"
import { useAccount, useAccountEffect, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { wagmiContractConfig } from "@/lib/wagmiContractConfig"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useState, useEffect } from "react"
import Image from 'next/image'

export function MintCard() {
    const [isConnected, setIsConnected] = useState(false)
    const [walletConnectError, showWalletConnectError] = useState(false)
    const [mintError, setMintError] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [transaction, setTransaction] = useState('')
    const { data: hash, isPending, writeContractAsync } = useWriteContract();

    const account = useAccount()
    useEffect(() => {
        if (account.address) {
            setIsConnected(true)
        }
    }, [account])

    useAccountEffect({
        onConnect() {
            setIsConnected(true)
        },
        onDisconnect() {
            setIsConnected(false)
        }
    })

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

    async function MintNFT() {
        console.log('Running MintNFT')
        if (!isConnected) {
            showWalletConnectError(true)
            return
        }
        writeContractAsync({
            address: '0x4C791bD82d3089fea1bDA94aFD735BE219282f1e',
            abi: wagmiContractConfig.abi,
            functionName: 'safeMint',
            args: [account.address]
        })
            .then((data) => {
                setMintError('')
                setShowSuccess(true)
                const txString = data.toString()
                setTransaction(txString)
                console.log('Success Data: ', data)
            })
            .catch((error) => {
                console.log(error)
                console.log('Error: ', error.message)
                if (error.message.includes('recipient is not whitelisted')) {
                    setMintError('This wallet is not whitelisted!')
                }
                else{
                    setMintError('Error Minting NFT!')
                }
            })
    }

    function handleDialogClose() {
        setShowSuccess(false)
    }

    return (
        <>
            {showSuccess && <SuccessDialog isOpen={showSuccess} onClose={handleDialogClose} txHash={transaction} />}
            
            <Card className='flex flex-col justify-between items-center w-1/2 h-1/2 min-h-80 min-w-60 sm:min-w-80 bg-white/85'>
                <CardHeader className='flex flex-row justify-center items-center'>
                    <ConnectButton chainStatus={"icon"} accountStatus={"address"} label='Connect to Base' showBalance={true} />
                </CardHeader>
                <CardContent className='flex flex-col justify-center items-center'>
                    <Image
                        src="/NFTImage.jpg"
                        alt='NFT Image'
                        width={200}
                        height={200}
                        className='w-full h-full'
                    />
                </CardContent>
                <CardFooter className='flex flex-col justify-center items-center'>
                    {walletConnectError && (<p className='font-red py-2 font-sm'>Wallet Not Connected!</p>)}
                    {mintError && (<p className='font-red py-4 font-sm flex justify-center text-center items-center'>{mintError}</p>)}
                    {isConfirmed && (
                        <>
                            <p className='font-green py-4 font-sm'>Transaction Confirmed!</p>
                        </>
                    )}
                    {
                        !isConnected ? (
                            <Button size='lg' className='rounded-lg font-bold' style={{ backgroundColor: 'gray' }} variant='default'>
                                Please Connect Wallet
                            </Button>
                        ) : (
                            <Button size='lg' className='rounded-lg font-bold' style={{ backgroundColor: 'red' }} variant='default' onClick={() => MintNFT()}>
                                {isPending ? 'Confirming' : 'Mint NFT on Base'}
                            </Button>
                        )
                    }
                </CardFooter>
            </Card>
        </>
    )
}