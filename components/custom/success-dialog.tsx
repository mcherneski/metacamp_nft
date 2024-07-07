import React, {ReactNode} from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"

  interface AlertDialogProps {
    isOpen: boolean
    txHash: string
    onClose: () => void
  }

  export const SuccessDialog: React.FC<AlertDialogProps> = ({ isOpen, onClose, txHash }) => {

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className='flex flex-col items-center justify-center'>
            <AlertDialogHeader>
                <AlertDialogTitle>
                Your NFT has been minted!
                </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription className='flex flex-col items-center justify-center'>
                Your NFT has been minted successfully.
                <br />
                <a
                    href={`https://sepolia.basescan.org/tx/${txHash}`} 
                    target='_blank'
                    className='text-red-500 hover:text-red-800 underline cursor-pointer'
                >
                    View on Etherscan
                </a>
            </AlertDialogDescription>
            <AlertDialogFooter>
                <AlertDialogAction onClick={onClose}>
                Close
                </AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
  }