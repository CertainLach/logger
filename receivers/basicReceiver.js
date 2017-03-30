/**
 * Created by f6cf on 30.12.2016.
 */
export default class BasicReceiver {
	logger;
	
	setLogger(logger){
		this.logger=logger;
	}
	write(data) {
		throw new Error('write(): Not implemented!');
	}
}
