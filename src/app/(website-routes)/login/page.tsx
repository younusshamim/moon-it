import LoginForm from "@/app/pages/login/login-form/login-form";
import Container from "@/components/container";

const Login = () => {
    return (
        <Container className="flex justify-center items-center py-10">
            <LoginForm />
        </Container>
    );
};

export default Login;