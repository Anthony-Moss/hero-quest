export const SPRITE_SIZE=32;
export const MAP_HEIGHT = SPRITE_SIZE * 20
export const MAP_WIDTH = SPRITE_SIZE * 20

// This represents our maps grid
export const townTiles = [
    [0 , 23 , 23 , 23 , 23 , 23 , 23 , 0 , 0 , 0 , 0 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 0  ,0 ],
    [0 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 13, 0 , 0 , 23 , 0  ,0 ],
    [0 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 0 , 23 , 0  ,0 ],
    [0 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 0 , 23 , 0  ,0 ],
    [0 , 23 , 23 , 23 , 1 , 23 , 23 , 0 , 0 , 0 , 0 , 23 , 23 , 23 , 1 , 23 , 23 , 23 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 22 , 22 , 22 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 22 , 24 , 22 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 0 , 0 , 6 , 0 , 0 , 23 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 23 , 23 , 1 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 5 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  ,0 ]
]

export const wildernessTiles = [
    [10 , 10 , 36 , 34 , 35 , 10 , 10 , 10 , 18 , 19 , 20 , 10 , 10 , 38 , 27 , 8 , 27 , 38 , 10 , 10 ],
    [10 , 10 , 28 , 11 , 29 , 10 , 10 , 10 , 28 , 30 , 29 , 10 , 10 , 38 , 27 , 4 , 27 , 38 , 10  ,10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 28 , 30 , 29 , 10 , 10 , 38 , 27 , 4 , 27 , 38  , 10  , 10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 28 , 30 , 29 , 10 , 10 , 38 , 27 , 4 , 27 , 38 , 10  ,10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 28 , 30 , 29 , 10 , 10 , 28 , 30 , 30 , 30 , 30 , 35  ,10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 28 , 30 , 29 , 10 , 10 , 32 , 31 , 31 , 31 , 30 , 29  ,10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 28 , 30 , 30 , 34 , 34 , 34 , 35 , 10 , 10 , 28 , 29  ,10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 32 , 31 , 31 , 31 , 31 , 30 , 29 , 10 , 10 , 28 , 29  ,10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 28 , 29 , 10 , 10 , 28 , 29  ,10 ],
    [10 , 10 , 28 , 30 , 30 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 30 , 30 , 34 , 34 , 30 , 29  ,10 ],
    [10 , 10 , 28 , 30 , 30 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 33  ,10 ],
    [10 , 10 , 28 , 30 , 29 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10  ,10 ],
    [10 , 10 , 28 , 30 , 30 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 35 , 10 , 10 , 10 , 10  ,10 ],
    [10 , 10 , 32 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 30 , 29 , 10 , 10 , 10 , 10  ,10 ],
    [10 , 37 , 37 , 37 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 28 , 29 , 10 , 10 , 10 , 10  ,10 ],
    [10 , 37 , 14 , 37 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 28 , 29 , 10 , 10 , 10 , 10  ,10 ],
    [10 , 37 , 30 , 37 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 28 , 30 , 34 , 34 , 34 , 34  ,35 ],
    [10 , 37 , 30 , 37 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 28 , 30 , 30 , 30 , 30 , 11  ,29 ],
    [10 , 37 , 30 , 37 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 32 , 31 , 31 , 31 , 31 , 31  ,33 ],
    [10 , 37 , 8 , 37 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 ]
]

export const dungeonTiles = [
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 27 , 7 , 27 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7  ,7 ],
    [25 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [25 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [25 , 7 , 7 , 25 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [9 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 25 , 25 , 25 , 25  ,25 ],
    [7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 25 , 7 , 7 , 25 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 25 , 25 , 25 , 25 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ]
]

export const battleTiles = [
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [5 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ],
    [12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12 , 12  ,12 ]
]

export const caveFirstLevel = [
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 27 , 15 , 27 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7  ,7 ],
    [7 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [25 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [25 , 7 , 7 , 25 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [9 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 25 , 25 , 25 , 25  ,25 ],
    [7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 25 , 7 , 7 , 25 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 25 , 25 , 25 , 25 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  ,7 ]
]

export const caveSecondLevel = [
    [7 , 7 , 7 , 7 , 7 , 7 , 25, 7 , 16, 16, 16, 7 , 25, 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 25, 7 , 16, 7 , 16, 7 , 25, 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 25, 7 , 16, 16, 16, 7 , 25, 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 25, 7 , 16, 16, 16, 7 , 25, 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 25, 7 , 7 , 7 , 7 , 7 , 25, 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 25, 7 , 7 , 7 , 7 , 7 , 25, 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 25, 25, 25, 7 , 25, 25, 25, 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [9 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ],
    [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ]
]

// Map used in game tutorial
    // [0, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 5, 5 ,5],
    // [0, 10, 10, 10, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 10, 3, 3, 3, 5 ,10],
    // [0, 0, 10, 0, 5, 0, 0, 0, 0, 10, 5, 5, 0, 0, 10, 3, 10, 3, 5 ,10],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 0, 0, 0, 3, 10, 3, 10 ,10],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 5, 0, 0, 0, 10, 0, 0 ,0],
    // [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 10, 10, 10, 10, 10, 0, 10, 10, 10 ,10],
    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0, 0 ,0],
    // [0, 10, 10, 10, 5, 0, 5, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0 ,0],
    // [10, 10, 10, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0],
    // [10, 10, 10, 10, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0]