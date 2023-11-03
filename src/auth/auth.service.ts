import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-auth0';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
    constructor() {
        super({
            domain: process.env.AUTH0_DOMAIN,
            clientID: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            callbackURL: process.env.AUTH0_CALLBACK_URL,
            state: false,
        });
    }

    async validate(accessToken, refreshToken, extraParams, profile, done): Promise<any> {
        return done(null, profile);
    }
}
