export default {
	monsterHead: [
		{
			name: 'life1',
			img: 'img/head_life1.png',
			health: 200,
			defense: {
				life: 0.05,
				chaos: 0.1,
				shadow: 0,
			},
			restore: 0,
			damage: 30
		},
		{
			name: 'life2',
			img: 'img/head_life2.png',
			health: 225,
			defense: {
				life: 0.075,
				chaos: 0.075,
				shadow: 0,
			},
			restore: 0,
			damage: 25
		},
		{
			name: 'chaos1',
			img: 'img/head_chaos1.png',
			health: 250,
			defense: {
				life: 0,
				chaos: 0.05,
				shadow: 0.1,
			},
			restore: 0,
			damage: 20
		},
		{
			name: 'chaos2',
			img: 'img/head_chaos2.png',
			health: 225,
			defense: {
				life: 0,
				chaos: 0.075,
				shadow: 0.075,
			},
			restore: 0.025,
			damage: 20
		},
		{
			name: 'shadow1',
			img: 'img/head_shadow1.png',
			health: 200,
			defense: {
				life: 0.1,
				chaos: 0,
				shadow: 0.05,
			},
			restore: 0.05,
			damage: 20
		},
		{
			name: 'shadow2',
			img: 'img/head_shadow2.png',
			health: 200,
			defense: {
				life: 0.075,
				chaos: 0.0,
				shadow: 0.075,
			},
			restore: 0.025,
			damage: 25
		},
	],
	monsterBody: [
		{
			name: 'life1',
			img: 'img/body_life1.png',
			health: 600,
			defense: {
				life: 0.2,
				chaos: 0.4,
				shadow: 0,
			},
			restore: 0,
			damage: 90,
			fraction: 'life'
		},
		{
			name: 'life2',
			img: 'img/body_life2.png',
			health: 650,
			defense: {
				life: 0.3,
				chaos: 0.3,
				shadow: 0,
			},
			restore: 0,
			damage: 85,
			fraction: 'life'
		},
		{
			name: 'chaos1',
			img: 'img/body_chaos1.png',
			health: 700,
			defense: {
				life: 0,
				chaos: 0.2,
				shadow: 0.4,
			},
			restore: 0,
			damage: 80,
			fraction: 'chaos'
		},
		{
			name: 'chaos2',
			img: 'img/body_chaos2.png',
			health: 650,
			defense: {
				life: 0,
				chaos: 0.3,
				shadow: 0.3,
			},
			restore: 0.05,
			damage: 80,
			fraction: 'chaos'
		},
		{
			name: 'shadow1',
			img: 'img/body_shadow1.png',
			health: 600,
			defense: {
				life: 0.4,
				chaos: 0,
				shadow: 0.2,
			},
			restore: 0.1,
			damage: 80,
			fraction: 'shadow'
		},
		{
			name: 'shadow2',
			img: 'img/body_shadow2.png',
			health: 600,
			defense: {
				life: 0.3,
				chaos: 0,
				shadow: 0.3,
			},
			restore: 0.05,
			damage: 85,
			fraction: 'shadow'
		}
	],
	monsterFoot: [
		{
			name: 'life1',
			img: 'img/foot_life1.png',
			health: 200,
			defense: {
				life: 0.05,
				chaos: 0.1,
				shadow: 0,
			},
			restore: 0,
			damage: 30
		},
		{
			name: 'life2',
			img: 'img/foot_life2.png',
			health: 225,
			defense: {
				life: 0.075,
				chaos: 0.075,
				shadow: 0,
			},
			restore: 0,
			damage: 25
		},
		{
			name: 'chaos1',
			img: 'img/foot_chaos1.png',
			health: 250,
			defense: {
				life: 0,
				chaos: 0.05,
				shadow: 0.1,
			},
			restore: 0,
			damage: 20
		},
		{
			name: 'chaos2',
			img: 'img/foot_chaos2.png',
			health: 225,
			defense: {
				life: 0,
				chaos: 0.075,
				shadow: 0.075,
			},
			restore: 0.025,
			damage: 20
		},
		{
			name: 'shadow1',
			img: 'img/foot_shadow1.png',
			health: 200,
			defense: {
				life: 0.1,
				chaos: 0,
				shadow: 0.05,
			},
			restore: 0.05,
			damage: 20
		},
		{
			name: 'shadow2',
			img: 'img/foot_shadow2.png',
			health: 200,
			defense: {
				life: 0.075,
				chaos: 0,
				shadow: 0.075,
			},
			restore: 0.025,
			damage: 25
		}
	]
}