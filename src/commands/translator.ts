
import type { GuildTextableChannel, Message } from 'eris';
import { IDS } from '../constants.js';


export const description = 'Checks if you can get the translator role.';

export function executor(msg: Message<GuildTextableChannel>): void {
  if(msg.guildID !== IDS.server) return;


  if(msg.member.roles.includes(IDS.flagRoles.TRANSLATOR)) {
    msg.channel.createMessage('You already have the translator role!');
  }
  else {
    msg.member.addRole(IDS.flagRoles.TRANSLATOR);
    msg.channel.createMessage('');
  }
}
