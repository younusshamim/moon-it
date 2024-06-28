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

            <DialogContent className={cn("max-w-screen-sm max-h-screen overflow-y-auto", className)}>
                {children}
            </DialogContent>
        </Dialog >
    );
};

export default Modal;