import Calibration from "../motion/Calibration";

class Node {
	constructor(connection, index) {
		this.connection = connection;
		this.token = connection.remote;
		this.index = index;
		this.deviceName = 'Unknown Device';
		this.playerName = 'Connecting...';
		this.calibration = new Calibration;

		this.acceleration = {x: 0, y: 0, z: 0};
		this.orientation = {x: 0, y: 0, z: 0};

		this.connection.on('Acceleration', pk => {
			this.acceleration.x = pk.motion.x;
			this.acceleration.y = pk.motion.y;
			this.acceleration.z = pk.motion.z;
		});

		this.connection.on('orientation', pk => {
			this.orientation.x = pk.motion.x;
			this.orientation.y = pk.motion.y;
			this.orientation.z = pk.motion.z;
		});
	}
}

export default Node;
