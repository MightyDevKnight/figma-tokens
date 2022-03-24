import { TokenTypes } from '@/constants/TokenTypes';
import { SingleGenericToken } from './SingleGenericToken';

// @TODO remove text type token if not used anymore
export type SingleTextToken<Named extends boolean = true> = SingleGenericToken<TokenTypes.TEXT, string, Named>;
