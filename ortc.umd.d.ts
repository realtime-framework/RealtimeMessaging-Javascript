
export class factory {
    createClient(): client;
}

export interface subscribeOptions {
	channel: string; 
	subscribeOnReconnected?: boolean; 
	filter?: string;
	subscriberId?: string;
}

export interface messageOptions {
	channel: string; 
	seqId: string; 
	filtered: boolean;
	message: string;
}

export interface presenceParameters {
	applicationKey?: string;
	authenticationToken?: string;
	channel: string;
	isCluster?: boolean;
	url?: string;
}

export interface presenceResult {
	metadata?: { [metadata: string]: number };
	subscriptions: number;
}

export class client {
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
	presence(params: presenceParameters, callback: (error: string, result: presenceResult) => void): void;
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

	onConnected(ortc: client): void;
	onDisconnected(ortc: client): void;
	onException(ortc: client, exception: string): void;
	onReconnected(ortc: client): void;
	onReconnecting(ortc: client): void;
	onSubscribed(ortc: client, channel: string): void;
	onUnsubscribed(ortc: client, channel: string): void;

	connect(appkey: string, token: string): void;	
	subscribe(channel: string, subscribeOnReconnected: boolean, onMessageCallback: (ortc: client, channel: string, message: string) => void): void;
	subscribeWithFilter(channel: string, subscribeOnReconnected: boolean, filter: string, onMessageWithFilter: (ortc: client, channel:string, filtered: boolean, message: string) => void): void;

	subscribeWithBuffer(channel: string, subscriberId: string, onMessageWithBuffer: (ortc: client, channel: string, seqId: string, message: string) => void): void;

	subscribeWithOptions(options: subscribeOptions, onMessageWithOptions: (ortc: client, msgOptions: messageOptions) => void): void;

	send(channel: string, message: string): void;
	publish(channel: string, message: string, ttl: number, resultCallback: (err: string, seqId: string) => void): void;

	unsubscribe(channel: string): void;
	disconnect(): void;

}

export const IbtRealTimeSJType: string;
export function createClient(): client;
export function loadOrtcFactory(type: string, callback: (factory: factory, error: string) => void) : void;
