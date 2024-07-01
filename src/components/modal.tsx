import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { cn } from '@/lib/utils';

type PropsTypes = {
    triggerBtn: ReactNode;
    children: ReactNode;
    className?: string;
}

const Modal = ({ triggerBtn, children, className }: PropsTypes) => {
    return (
        <Dialog>
            < DialogTrigger asChild >
                {triggerBtn}
            </DialogTrigger >

            <DialogContent className={cn("max-w-screen-md max-h-screen overflow-y-auto border-border", className)}>
                {children}
            </DialogContent>
        </Dialog >
    );
};

export default Modal;