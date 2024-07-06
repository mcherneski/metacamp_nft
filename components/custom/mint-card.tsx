'use client'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
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
            address: '0x2eb0DD9b136Da8Cbd6089209baa952e6c897C3Ee',
            abi: wagmiContractConfig.abi,
            functionName: 'safeMint',
            args: [account.address]
        })
            .then((data) => {
                setMintError('')
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

    return (
        <Card className='flex flex-col justify-between items-center w-1/2 h-1/2 min-h-80 min-w-60 sm:min-w-80 bg-white/85'>
            <CardHeader className='flex flex-row justify-center items-center'>
                <ConnectButton accountStatus='address' chainStatus='none'/>
            </CardHeader>
            <CardContent className='flex flex-col justify-center items-center'>
                <Image
                    src="/pepper.png"
                    alt='NFT Image'
                    width={200}
                    height={200}
                    className='h-2/3 w-2/3 sm:h-full sm:w-full'
                />
            </CardContent>
            <CardFooter className='flex flex-col justify-center items-center'>
                {walletConnectError && (<p className='font-red py-2 font-sm'>Wallet Not Connected!</p>)}
                {mintError && (<p className='font-red py-4 font-sm flex justify-center text-center items-center'>{mintError}</p>)}
                {isConfirmed && (<p className='font-green py-4 font-sm'>Transaction Confirmed!</p>)}
                {
                    !isConnected ? (
                        <Button size='lg' className='rounded-lg font-bold' style={{ backgroundColor: 'gray' }} variant='default'>
                            Please Connect Wallet
                        </Button>
                    ) : (
                        <Button size='lg' className='rounded-lg font-bold' style={{ backgroundColor: 'red' }} variant='default' onClick={() => MintNFT()}>
                            {isPending ? 'Confirming' : 'Mint NFT'}
                        </Button>
                    )
                }
            </CardFooter>
        </Card>
    )
}