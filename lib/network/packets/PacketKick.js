import Packet from "./Packet";

class PacketReady extends Packet{
	constructor() {
		super();
	}

	resetBuffer() {
		this.buffer = new Uint8Array(1);
	}

	static get NETWORK_ID() {
		return 0x22;
	}

	static get name() {
		return "Kick";
	}
}

export default PacketReady;
