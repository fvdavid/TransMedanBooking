import { Authority } from './authority';

export interface UserToken {
    login?: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    authorities: Authority[];
}
