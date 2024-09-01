"use client";

import PrimaryButton from "@/components/primary-button";
import { Input } from "@/components/ui/input";
import { BaseResponseModel } from "@/models/base";
import { loginSchema } from "@/schemas/zod/login.schema";
import { onJoinSeminar } from "@/services/seminar.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const LoginForm = () => {
    const [state, formAction] = useFormState<BaseResponseModel<null>, FormData>(onJoinSeminar, null);
    const [submitting, setSubmitting] = useState(false)

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
        getValues
    } = useForm<any>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = handleSubmit((data) => {
        // formAction(data);
        // setSubmitting(true)
    })

    useEffect(() => {
        if (!state) { return }
        if (state.status === 'success') {
            reset();
            setSubmitting(false)
        } else if (state.status === 'error') {
            setSubmitting(false)
            toast.error(state.message);
        }
    }, [reset, state]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-[400px]">
            <Input
                label="Email"
                placeholder="Write your email"
                {...register("email")}
                error={errors.email?.message as string}
            />

            <Input
                label="Password"
                placeholder="Write your password"
                {...register("password")}
                error={errors.password?.message as string}
            />

            <PrimaryButton type="submit" disabled={submitting}>{submitting ? 'Signing In' : 'Sign In'}</PrimaryButton>
        </form>
    );
};

export default LoginForm;