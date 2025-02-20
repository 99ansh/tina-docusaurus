import { AbstractAuthProvider } from 'tinacms'
import React, { createContext, useContext } from 'react';

export class CustomAuthProvider extends AbstractAuthProvider {
    constructor() {
        super()
        // Do any setup here
    }
    async authenticate(props) {
        // Do any authentication here
        console.log(props)
    }
    async getToken() {
        return "DummyToken"
        // Return the token here. The token will be passed as an Authorization header in the format `Bearer <token>`
    }
    async getUser() {
        // Returns a truthy value, the user is logged in and if it returns a falsy value the user is not logged in.
        return true
    }
    async logout() {
        // Do any logout logic here
    }
    async authorize(context) {
        // Do any authorization logic here
        return true
    }
    getSessionProvider() {
        // GetSessionProvider can be deleted if not needed
        // OPTIONALLY Return a React context provider to that will wrap the admin
            return DefaultSessionProvider
        }
}

const DefaultSessionProvider = ({ children }) => (
    <React.Fragment>
        {children}
    </React.Fragment>
);