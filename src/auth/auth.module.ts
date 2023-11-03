import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Auth0Strategy } from './auth0.strategy';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'auth0' })],
    providers: [AuthService, Auth0Strategy],
    exports: [AuthService],
})
export class AuthModule { }
