import { IsString, IsIn, IsOptional } from 'class-validator';

export const REACTION_EMOJIS = ['👍', '❤️', '😄', '😮', '😢'] as const;
export type ReactionEmoji = typeof REACTION_EMOJIS[number];

export class CreateReactionDto {
  @IsString()
  @IsIn(REACTION_EMOJIS)
  emoji: ReactionEmoji;

  @IsOptional()
  @IsString()
  guestKey?: string;
}
