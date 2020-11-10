import { Injectable } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import aes from '../lib/common'

@Injectable()
export class AuthService {
    constructor(private accountService: AccountService) {}

    async validateAccount(username: string, pass: string): Promise<any> {
        const user = await this.accountService.findOne({email: username});
        if (user && user.password === aes(pass)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}