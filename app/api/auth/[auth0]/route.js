// app/api/auth/[auth0]/route.js
import { handleAuth, handleCallback, handleLogin, handleLogout, handleProfile } from '@auth0/nextjs-auth0';
import { createSession, deleteSession } from '../../../lib/sessions';

const afterCallback = (req, session, state) => {
    createSession(session.user.sub.split('|')[1]);
    return session;
}

export const GET = handleAuth({
    login: handleLogin({
        returnTo: '/dashboard',
    }),
    callback: handleCallback({ afterCallback }),
    logout: handleLogout((req) => {
        deleteSession();
        return { returnTo: '/' };
    }),
});