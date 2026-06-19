import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

interface ConfirmDeleteDialogProps {
    triggerText: string;
    triggerClassName?: string;
    title: string;
    description: string;
    onConfirm: () => void;
    confirmText?: string;
}

export default function ConfirmDeleteDialog({
    triggerText,
    triggerClassName,
    title,
    description,
    onConfirm,
    confirmText = 'Delete',
}: ConfirmDeleteDialogProps) {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
        onConfirm();
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive" className={triggerClassName}>
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive" onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
