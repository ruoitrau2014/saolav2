import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  ConnectedSocket  
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(parseInt(process.env.WSPORT || '4001'),{ namespace: 'events' })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage('events')
  handleEvent(
    @MessageBody() data: unknown,
    @ConnectedSocket() client: Socket
  ): WsResponse<unknown> {
    //console.log(client.handshake?.query??'Empty')
    //{ token: '123', EIO: '3', transport: 'polling', t: 'NJgEPBx' }
    const event = 'events';
    return { event, data };
  }
}
