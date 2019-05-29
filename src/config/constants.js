export const SPRITE_SIZE=32;
export const MAP_HEIGHT = SPRITE_SIZE * 20
export const MAP_WIDTH = SPRITE_SIZE * 20

// This represents our maps grid
export const townTiles = [
    [0 , 23 , 23 , 23 , 23 , 23 , 23 , 0 , 0 , 0 , 0 , 23 , 23 , 23 , 23 , 23 , 23 , 23 , 0  ,0 ],
    [14 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 0 , 0 , 23 , 0 , 0 , 13, 0 , 0 , 23 , 0  ,0 ],
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
    [37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 18 , 19 , 20 , 37 , 37 , 38 , 27 , 8 , 27 , 38 , 37 , 37 ],
    [37 , 37 , 36 , 30 , 35 , 37 , 37 , 37 , 28 , 30 , 29 , 37 , 37 , 38 , 27 , 4 , 27 , 38 , 37  , 37 ],
    [37 , 37 , 28 , 11 , 29 , 37 , 37 , 37 , 28 , 30 , 29 , 37 , 37 , 38 , 27 , 4 , 27 , 38  , 37 , 37 ],
    [37 , 37 , 28 , 30 , 29 , 37 , 37 , 37 , 28 , 30 , 29 , 37 , 37 , 38 , 27 , 4 , 27 , 38 , 37  , 37 ],
    [37 , 37 , 28 , 30 , 29 , 37 , 37 , 37 , 28 , 30 , 29 , 37 , 37 , 28 , 30 , 30 , 30 , 30 , 35 , 37 ],
    [37 , 37 , 28 , 30 , 29 , 37 , 37 , 43 , 28 , 30 , 29 , 37 , 37 , 32 , 31 , 31 , 31 , 30 , 29 , 37 ],
    [37 , 37 , 28 , 30 , 29 , 37 , 10 , 10 , 28 , 30 , 30 , 34 , 34 , 34 , 35 , 40 , 40 , 28 , 29 , 37 ],
    [37 , 37 , 28 , 30 , 29 , 37 , 40 , 40 , 32 , 31 , 31 , 31 , 31 , 30 , 29 , 40 , 40 , 28 , 29 , 37 ],
    [37 , 37 , 28 , 30 , 29 , 37 , 41 , 41 , 41 , 41 , 42 , 42 , 42 , 28 , 29 , 42 , 42 , 28 , 29 , 37 ],
    [37 , 37 , 28 , 30 , 30 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 30 , 30 , 34 , 34 , 30 , 29 , 37 ],
    [37 , 37 , 28 , 30 , 30 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 33 , 37 ],
    [37 , 37 , 28 , 30 , 29 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 ],
    [37 , 37 , 28 , 30 , 30 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 34 , 35 , 10 , 10 , 37 , 37 , 37 ],
    [37 , 37 , 32 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 31 , 30 , 29 , 10 , 43 , 41 , 37 , 37 ],
    [37 , 37 , 37 , 37 , 37 , 40 , 41 , 41 , 42 , 43 , 10 , 10 , 10 , 28 , 29 , 10 , 42 , 41 , 40 , 37 ],
    [37 , 37 , 14 , 37 , 37 , 10 , 39 , 39 , 39 , 39 , 39 , 42 , 43 , 28 , 29 , 10 , 43 , 42 , 40 , 37 ],
    [37 , 37 , 30 , 37 , 37 , 10 , 39 , 39 , 39 , 39 , 39 , 42 , 43 , 28 , 30 , 34 , 34 , 34 , 35 , 37 ],
    [37 , 37 , 30 , 37 , 37 , 10 , 39 , 39 , 39 , 39 , 39 , 10 , 10 , 28 , 30 , 30 , 30 , 11 , 30 , 37 ],
    [37 , 37 , 30 , 37 , 37 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 10 , 32 , 31 , 31 , 31 , 31 , 33 , 37 ],
    [37 , 37 , 8 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 , 37 ]
]

export const dungeonTiles = [
    [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25 , 25],
    [25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  , 25 ],
    [25 , 7 , 7 , 7 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7  , 25 ],
    [25 , 7 , 7 , 7 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 25 , 7 , 7  , 25 ],
    [25 , 27 , 9 , 27 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7 , 7  , 25 ],
    [25 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  , 25 ],
    [25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 25 , 25 , 7 , 25 , 25  , 25 ],
    [25 , 7 , 25 , 25 , 7 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 25  , 25 ],
    [25 , 7 , 7 , 25 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 7 , 25 , 7 , 27 , 16 , 27 , 7  , 25 ],
    [9 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 7 , 16 , 7 , 16 , 7  , 25 ],
    [7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 25 , 25 , 25 , 25 , 25  ,25 ],
    [25 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 7  , 25 ],
    [25 , 7 , 7 , 25 , 25 , 25 , 7 , 7 , 7 , 25 , 25 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 7  , 25 ],
    [25 , 7 , 7 , 7 , 25 , 25 , 25 , 7 , 7 , 25 , 3 , 7 , 7 , 25 , 25 , 7 , 7 , 25 , 7  , 25 ],
    [25 , 7 , 7 , 7 , 7 , 25 , 25 , 25 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 25 , 7  , 25 ],
    [25 , 7 , 7 , 7 , 7 , 7 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7  , 25 ],
    [25 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 25 , 7  , 25 ],
    [25 , 25 , 7 , 7 , 7 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7  , 25 ],
    [25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7  , 25 ],
    [25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25  ,25 ]
]

export const dungeonTiles2 = [
    [25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 9 , 25 , 25 ],
    [25 , 25 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 25 , 25 , 25 , 7 , 25 , 25 , 25 , 27 , 7 , 27 , 25 ],
    [25 , 25 , 25 , 7 , 7 , 7 , 25 , 7 , 7 , 25 , 25 , 7 , 7 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 25 , 7 , 7 , 25 , 25 , 25 , 7 , 7 , 25 , 25 , 7 , 7 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 7 , 25 , 7 , 25 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 7 , 25 , 7 , 25 , 25 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 7 , 25 , 25 , 25 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 7 , 7 , 7 , 25 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 3 , 25 , 7 , 7 , 25 , 25 , 25 ],
    [25 , 7 , 7 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 ],
    [25 , 7 , 7 , 25 , 27 , 25 , 25 , 25 , 27 , 25 , 25 , 25 , 27 , 25 , 27 , 7 , 60 , 7 , 27 , 25 ],
    [25 , 7 , 7 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 25 , 7 , 7 , 25 , 7 , 60 , 60 , 60 , 7 , 25 ],
    [25 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 60 , 60 , 7 , 60 , 60 , 25 ],
    [25 , 7 , 25 , 7 , 7 , 7 , 25 , 7 , 7 , 7 , 25 , 7 , 7 , 25 , 7 , 60 , 60 , 60 , 7 , 25 ],
    [25 , 7 , 25 , 25 , 27 , 25 , 25 , 25 , 27 , 25 , 25 , 25 , 27 , 25 , 27 , 7 , 60 , 7 , 27 , 25 ],
    [25 , 9 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 , 25 ]
]

// 9 = doorway to dungeonTiles

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
    [44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 9 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 ],
    [44 , 44 , 45 , 45 , 45 , 45 , 45 , 45 , 44 , 45 , 44 , 44 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 44 ],
    [44 , 45 , 45 , 45 , 44 , 44 , 44 , 45 , 44 , 45 , 44 , 44 , 45 , 44 , 44 , 44 , 44 , 44 , 45 , 44 ],
    [44 , 44 , 45 , 45 , 44 , 3 , 44 , 45 , 44 , 45 , 44 , 44 , 45 , 45 , 45 , 45 , 45 , 44 , 45 , 44 ],
    [44 , 44 , 44 , 45 , 44 , 45 , 44 , 45 , 44 , 45 , 44 , 44 , 44 , 44 , 44 , 44 , 45 , 44 , 45 , 44 ],
    [44 , 44 , 45 , 45 , 44 , 45 , 44 , 45 , 44 , 45 , 44 , 44 , 45 , 45 , 45 , 45 , 45 , 44 , 45 , 44 ],
    [44 , 45 , 45 , 45 , 44 , 45 , 45 , 45 , 44 , 45 , 44 , 44 , 45 , 44 , 44 , 44 , 44 , 44 , 45 , 44 ],
    [44 , 44 , 45 , 45 , 44 , 44 , 44 , 44 , 44 , 45 , 44 , 44 , 45 , 45 , 45 , 45 , 45 , 44 , 45 , 44 ],
    [44 , 44 , 44 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 44 , 44 , 44 , 45 , 45 , 45 , 45 , 44 , 45 , 44 ],
    [44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 45 , 44 , 44 , 44 , 44 , 44 , 44 , 45 , 44 , 45 , 44 ],
    [44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 45 , 44 , 45 , 45 , 45 , 44 , 45 , 45 , 44 , 45 , 44 ],
    [44 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 44 , 45 , 44 , 45 , 44 , 45 , 44 , 45 , 45 , 44 , 45 , 44 ],
    [44 , 45 , 44 , 45 , 45 , 45 , 44 , 45 , 44 , 45 , 45 , 45 , 44 , 45 , 45 , 45 , 45 , 44 , 45 , 44 ],
    [44 , 45 , 45 , 44 , 45 , 44 , 45 , 45 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 45 , 44 ],
    [44 , 45 , 45 , 45 , 44 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 44 ],
    [44 , 45 , 44 , 45 , 45 , 45 , 44 , 45 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 45 , 44 ],
    [44 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 44 , 44 , 45 , 45 , 44 , 44 , 45 , 45 , 44 , 44 , 44 , 44 ],
    [44 , 45 , 44 , 45 , 45 , 45 , 44 , 45 , 44 , 45 , 45 , 45 , 45 , 44 , 44 , 44 , 44 , 45 , 15 , 44 ],
    [44 , 45 , 45 , 44 , 44 , 44 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 45 , 44 , 44 ],
    [44 , 44 , 44 , 45 , 45 , 45 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 , 44 ] 
]

export const caveSecondLevel = [
    [46 , 46 , 46 , 46 , 46 , 46 , 25, 46 , 16, 16, 16, 46 , 25, 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 25, 46 , 16, 46 , 16, 46 , 25, 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 25, 46 , 16, 16, 16, 46 , 25, 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 25, 46 , 16, 16, 16, 46 , 25, 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 25, 46 , 46 , 46 , 46 , 46 , 25, 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 25, 46 , 46 , 46 , 46 , 46 , 25, 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 25, 25, 25, 46 , 25, 25, 25, 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [9 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ],
    [46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 ]
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