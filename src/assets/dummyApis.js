import { reshtockStates, shopenStates, shluts, upcomingEvents } from "./dummyData.js";

const getShopSummary = () => {
	const randomReshtock = reshtockStates[Math.floor(Math.random() * reshtockStates.length)];
	const randomShopen = shopenStates[Math.floor(Math.random() * shopenStates.length)];
	const randomShlut = shluts[Math.floor(Math.random() * shluts.length)];
	return {
		reshtockState: randomReshtock,
		shopenState: randomShopen,
		shlutOnDuty: randomShlut,
	};
};

export const getEventSummary = () => {
	const randomEvent = upcomingEvents[Math.floor(Math.random() * upcomingEvents.length)];
	return {
		upcomingEvent: randomEvent,
	};
};

export default getShopSummary;