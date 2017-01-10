
export class Factory {
    createClient(): Client;
}

export interface SubscribeOptions {
	channel: string; 
	subscribeOnReconnected?: boolean; 
	filter?: string;
	subscriberId?: string;
}

export interface MessageOptions {
	channel: string; 
	seqId: string; 
	filtered: boolean;
	message: string;
}

export interface PresenceParameters {
	applicationKey?: string;
	authenticationToken?: string;
	channel: string;
	isCluster?: boolean;
	url?: string;
}

export interface PresenceResult {
	metadata?: { [metadata: string]: number };
	subscriptions: number;
}

export class Client {
	setClusterUrl(url: string): void;
	getAnnouncementSubChannel(): string;
	getClusterUrl(): string;
	getConnectionMetadata(): string;
	getConnectionTimeout(): number;
	getHeartbeatActive(): boolean;
	getHeartbeatFails(): number;
	getHeartbeatTime(): number;
	getId(): string;
	getProtocol(): string;
	getSessionId(): string;
	getUrl(): string;
	getIsConnected(): boolean;
	isSubscribed(channel: string): boolean;
	presence(params: PresenceParameters, callback: (error: string, result: PresenceResult) => void): void;
	setAnnouncementSubChannel(channel: string): void;
	setConnectionMetadata(connectionMetadata: string): void;
	setConnectionTimeout(connectionTimeout: number): void;
	setHeartbeatActive(active: boolean): void;
	setHeartbeatFails(newHeartbeatFails: number): void;
	setHeartbeatTime(newHeartbeatTime: number): void;
	setId(id: string): void;
	setProtocol(protocol: string): void;
	setUrl(url: string): void;
	getPublishTimeout(): number;
  	setPublishTimeout(newTimeout: number): void;

	onConnected(ortc: Client): void;
	onDisconnected(ortc: Client): void;
	onException(ortc: Client, exception: string): void;
	onReconnected(ortc: Client): void;
	onReconnecting(ortc: Client): void;
	onSubscribed(ortc: Client, channel: string): void;
	onUnsubscribed(ortc: Client, channel: string): void;

	connect(appkey: string, token: string): void;	
	subscribe(channel: string, subscribeOnReconnected: boolean, onMessageCallback: (ortc: Client, channel: string, message: string) => void): void;
	subscribeWithFilter(channel: string, subscribeOnReconnected: boolean, filter: string, onMessageWithFilter: (ortc: Client, channel:string, filtered: boolean, message: string) => void): void;

	subscribeWithBuffer(channel: string, subscriberId: string, onMessageWithBuffer: (ortc: Client, channel: string, seqId: string, message: string) => void): void;

	subscribeWithOptions(options: SubscribeOptions, onMessageWithOptions: (ortc: Client, msgOptions: MessageOptions) => void): void;

	send(channel: string, message: string): void;
	publish(channel: string, message: string, ttl: number, resultCallback: (err: string, seqId: string) => void): void;

	unsubscribe(channel: string): void;
	disconnect(): void;

}

export const IbtRealTimeSJType: string;
export function createClient(): Client;
export function loadOrtcFactory(type: string, callback: (factory: Factory, error: string) => void) : void;
