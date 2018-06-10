
let life = {
	health: 1000,
	defense: {
		life: 0.3,
		chaos: 0.6,
		shadow: 0,
	},
	restore: 0,
	damage: 400,
	damageFactor: {
		life: 1,
		chaos: 0.85,
		shadow: 0.7
	},
}
let chaos = {
	health: 1200,
	defense: {
		life: 0,
		chaos: 0.3,
		shadow: 0.6,
	},
	restore: 0,
	damage: 330,
	damageFactor: {
		life: 0.7,
		chaos: 1,
		shadow: 0.85
	},
}
let shadow = {
	health: 1000,
	defense: {
		life: 0.6,
		chaos: 0,
		shadow: 0.3,
	},
	restore: 0.1,
	damage: 330,
	damageFactor: {
		life: 0.85,
		chaos: 0.7,
		shadow: 1
	},
}

export default {life, chaos, shadow}