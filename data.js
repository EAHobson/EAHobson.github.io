const NPU_RANDOM = `
timestep, agent, x-coor, y-coor,label
1, 0, 48, 24,bat
1, 1, 8, 22,bat
1, 2, 12, 50,bat
1, 3, 0, 36,bat
1, 4, 3, 46,bat
1, 5, 26, 49,bat
1, 6, 18, 44,bat
1, 7, 19, 10,bat
1, 8, 44, 24,bat
1, 9, 50, 10,bat
1, 10, 40, 37,bat
1, 11, 17, 12,bat
2, 0, 48, 25,bat
2, 1, 8, 21,bat
2, 2, 11, 50,bat
2, 3, 0, 35,bat
2, 4, 4, 46,bat
2, 5, 26, 48,bat
2, 6, 18, 43,bat
2, 7, 20, 10,bat
2, 8, 43, 24,bat
2, 9, 50, 9,bat
2, 10, 39, 37,bat
2, 11, 17, 11,bat
3, 0, 49, 25,bat
3, 1, 8, 20,bat
3, 2, 12, 50,bat
3, 3, 0, 36,bat
3, 4, 5, 46,bat
3, 5, 27, 48,bat
3, 6, 19, 43,bat
3, 7, 20, 11,bat
3, 8, 44, 24,bat
3, 9, 50, 9,bat
3, 10, 39, 36,bat
3, 11, 17, 12,bat
4, 0, 49, 26,bat
4, 1, 7, 20,bat
4, 2, 12, 50,bat
4, 3, 0, 37,bat
4, 4, 4, 46,bat
4, 5, 28, 48,bat
4, 6, 18, 43,bat
4, 7, 20, 10,bat
4, 8, 45, 24,bat
4, 9, 49, 9,bat
4, 10, 40, 36,bat
4, 11, 16, 12,bat
5, 0, 48, 26,bat
5, 1, 7, 19,bat
5, 2, 11, 50,bat
5, 3, 0, 36,bat
5, 4, 4, 47,bat
5, 5, 28, 49,bat
5, 6, 18, 44,bat
5, 7, 19, 10,bat
5, 8, 45, 25,bat
5, 9, 48, 9,bat
5, 10, 40, 37,bat
5, 11, 15, 12,bat
6, 0, 47, 26,bat
6, 1, 8, 19,bat
6, 2, 11, 49,bat
6, 3, 1, 36,bat
6, 4, 4, 48,bat
6, 5, 28, 48,bat
6, 6, 19, 44,bat
6, 7, 20, 10,bat
6, 8, 46, 25,bat
6, 9, 49, 9,bat
6, 10, 40, 38,bat
6, 11, 16, 12,bat
7, 0, 47, 25,bat
7, 1, 7, 19,bat
7, 2, 10, 49,bat
7, 3, 0, 36,bat
7, 4, 4, 49,bat
7, 5, 27, 48,bat
7, 6, 19, 45,bat
7, 7, 20, 9,bat
7, 8, 45, 25,bat
7, 9, 50, 9,bat
7, 10, 40, 39,bat
7, 11, 16, 13,bat
8, 0, 47, 26,bat
8, 1, 6, 19,bat
8, 2, 10, 50,bat
8, 3, 0, 35,bat
8, 4, 3, 49,bat
8, 5, 27, 47,bat
8, 6, 19, 44,bat
8, 7, 20, 10,bat
8, 8, 45, 26,bat
8, 9, 50, 8,bat
8, 10, 40, 38,bat
8, 11, 16, 12,bat
9, 0, 46, 26,bat
9, 1, 6, 20,bat
9, 2, 10, 50,bat
9, 3, 0, 36,bat
9, 4, 4, 49,bat
9, 5, 28, 47,bat
9, 6, 18, 44,bat
9, 7, 19, 10,bat
9, 8, 45, 25,bat
9, 9, 49, 8,bat
9, 10, 40, 39,bat
9, 11, 16, 11,bat
10, 0, 47, 26,bat
10, 1, 6, 19,bat
10, 2, 11, 50,bat
10, 3, 0, 36,bat
10, 4, 4, 48,bat
10, 5, 29, 47,bat
10, 6, 18, 43,bat
10, 7, 19, 11,bat
10, 8, 44, 25,bat
10, 9, 49, 7,bat
10, 10, 41, 39,bat
10, 11, 16, 10,bat
11, 0, 47, 27,bat
11, 1, 5, 19,bat
11, 2, 11, 49,bat
11, 3, 0, 36,bat
11, 4, 5, 48,bat
11, 5, 28, 47,bat
11, 6, 18, 42,bat
11, 7, 18, 11,bat
11, 8, 44, 24,bat
11, 9, 48, 7,bat
11, 10, 40, 39,bat
11, 11, 17, 10,bat
12, 0, 47, 28,bat
12, 1, 5, 20,bat
12, 2, 11, 48,bat
12, 3, 0, 36,bat
12, 4, 4, 48,bat
12, 5, 28, 48,bat
12, 6, 19, 42,bat
12, 7, 18, 12,bat
12, 8, 45, 24,bat
12, 9, 47, 7,bat
12, 10, 40, 38,bat
12, 11, 18, 10,bat
13, 0, 47, 29,bat
13, 1, 5, 19,bat
13, 2, 10, 48,bat
13, 3, 0, 36,bat
13, 4, 4, 49,bat
13, 5, 28, 49,bat
13, 6, 18, 42,bat
13, 7, 18, 13,bat
13, 8, 46, 24,bat
13, 9, 46, 7,bat
13, 10, 41, 38,bat
13, 11, 18, 9,bat
14, 0, 47, 30,bat
14, 1, 4, 19,bat
14, 2, 11, 48,bat
14, 3, 1, 36,bat
14, 4, 4, 48,bat
14, 5, 29, 49,bat
14, 6, 18, 43,bat
14, 7, 18, 14,bat
14, 8, 45, 24,bat
14, 9, 47, 7,bat
14, 10, 41, 39,bat
14, 11, 19, 9,bat
15, 0, 47, 29,bat
15, 1, 5, 19,bat
15, 2, 10, 48,bat
15, 3, 0, 36,bat
15, 4, 3, 48,bat
15, 5, 29, 48,bat
15, 6, 18, 42,bat
15, 7, 19, 14,bat
15, 8, 46, 24,bat
15, 9, 47, 8,bat
15, 10, 41, 40,bat
15, 11, 18, 9,bat
16, 0, 47, 30,bat
16, 1, 5, 20,bat
16, 2, 10, 49,bat
16, 3, 1, 36,bat
16, 4, 4, 48,bat
16, 5, 29, 49,bat
16, 6, 18, 41,bat
16, 7, 20, 14,bat
16, 8, 47, 24,bat
16, 9, 47, 7,bat
16, 10, 40, 40,bat
16, 11, 18, 10,bat
17, 0, 47, 31,bat
17, 1, 6, 20,bat
17, 2, 10, 48,bat
17, 3, 1, 37,bat
17, 4, 4, 47,bat
17, 5, 29, 50,bat
17, 6, 18, 40,bat
17, 7, 19, 14,bat
17, 8, 46, 24,bat
17, 9, 46, 7,bat
17, 10, 41, 40,bat
17, 11, 19, 10,bat
18, 0, 46, 31,bat
18, 1, 7, 20,bat
18, 2, 11, 48,bat
18, 3, 1, 38,bat
18, 4, 3, 47,bat
18, 5, 30, 50,bat
18, 6, 18, 39,bat
18, 7, 19, 15,bat
18, 8, 45, 24,bat
18, 9, 47, 7,bat
18, 10, 42, 40,bat
18, 11, 19, 11,bat
19, 0, 46, 30,bat
19, 1, 7, 21,bat
19, 2, 11, 47,bat
19, 3, 2, 38,bat
19, 4, 4, 47,bat
19, 5, 30, 49,bat
19, 6, 18, 40,bat
19, 7, 20, 15,bat
19, 8, 45, 23,bat
19, 9, 47, 8,bat
19, 10, 42, 39,bat
19, 11, 19, 12,bat
20, 0, 47, 30,bat
20, 1, 7, 20,bat
20, 2, 12, 47,bat
20, 3, 2, 39,bat
20, 4, 3, 47,bat
20, 5, 31, 49,bat
20, 6, 17, 40,bat
20, 7, 19, 15,bat
20, 8, 46, 23,bat
20, 9, 47, 7,bat
20, 10, 42, 40,bat
20, 11, 19, 11,bat
21, 0, 46, 30,bat
21, 1, 6, 20,bat
21, 2, 12, 46,bat
21, 3, 1, 39,bat
21, 4, 3, 46,bat
21, 5, 32, 49,bat
21, 6, 17, 41,bat
21, 7, 20, 15,bat
21, 8, 45, 23,bat
21, 9, 48, 7,bat
21, 10, 42, 39,bat
21, 11, 18, 11,bat
22, 0, 47, 30,bat
22, 1, 5, 20,bat
22, 2, 13, 46,bat
22, 3, 1, 40,bat
22, 4, 3, 47,bat
22, 5, 31, 49,bat
22, 6, 16, 41,bat
22, 7, 21, 15,bat
22, 8, 45, 24,bat
22, 9, 49, 7,bat
22, 10, 42, 38,bat
22, 11, 17, 11,bat
23, 0, 46, 30,bat
23, 1, 4, 20,bat
23, 2, 14, 46,bat
23, 3, 0, 40,bat
23, 4, 4, 47,bat
23, 5, 31, 50,bat
23, 6, 17, 41,bat
23, 7, 21, 14,bat
23, 8, 45, 23,bat
23, 9, 48, 7,bat
23, 10, 42, 39,bat
23, 11, 16, 11,bat
24, 0, 46, 31,bat
24, 1, 4, 21,bat
24, 2, 13, 46,bat
24, 3, 0, 40,bat
24, 4, 4, 48,bat
24, 5, 30, 50,bat
24, 6, 17, 40,bat
24, 7, 21, 15,bat
24, 8, 44, 23,bat
24, 9, 48, 6,bat
24, 10, 43, 39,bat
24, 11, 15, 11,bat
25, 0, 45, 31,bat
25, 1, 5, 21,bat
25, 2, 12, 46,bat
25, 3, 1, 40,bat
25, 4, 5, 48,bat
25, 5, 29, 50,bat
25, 6, 16, 40,bat
25, 7, 21, 16,bat
25, 8, 43, 23,bat
25, 9, 48, 5,bat
25, 10, 42, 39,bat
25, 11, 15, 10,bat
26, 0, 45, 32,bat
26, 1, 6, 21,bat
26, 2, 13, 46,bat
26, 3, 0, 40,bat
26, 4, 6, 48,bat
26, 5, 29, 50,bat
26, 6, 16, 41,bat
26, 7, 21, 17,bat
26, 8, 43, 24,bat
26, 9, 49, 5,bat
26, 10, 43, 39,bat
26, 11, 15, 9,bat
27, 0, 45, 31,bat
27, 1, 6, 22,bat
27, 2, 14, 46,bat
27, 3, 0, 41,bat
27, 4, 6, 47,bat
27, 5, 30, 50,bat
27, 6, 16, 40,bat
27, 7, 21, 18,bat
27, 8, 44, 24,bat
27, 9, 50, 5,bat
27, 10, 44, 39,bat
27, 11, 16, 9,bat
28, 0, 46, 31,bat
28, 1, 7, 22,bat
28, 2, 15, 46,bat
28, 3, 1, 41,bat
28, 4, 7, 47,bat
28, 5, 30, 50,bat
28, 6, 15, 40,bat
28, 7, 20, 18,bat
28, 8, 44, 25,bat
28, 9, 50, 4,bat
28, 10, 44, 40,bat
28, 11, 15, 9,bat
29, 0, 46, 32,bat
29, 1, 8, 22,bat
29, 2, 16, 46,bat
29, 3, 1, 40,bat
29, 4, 7, 46,bat
29, 5, 30, 50,bat
29, 6, 14, 40,bat
29, 7, 21, 18,bat
29, 8, 44, 26,bat
29, 9, 49, 4,bat
29, 10, 43, 40,bat
29, 11, 15, 8,bat
30, 0, 46, 33,bat
30, 1, 9, 22,bat
30, 2, 16, 47,bat
30, 3, 1, 39,bat
30, 4, 6, 46,bat
30, 5, 31, 50,bat
30, 6, 14, 39,bat
30, 7, 21, 19,bat
30, 8, 45, 26,bat
30, 9, 48, 4,bat
30, 10, 44, 40,bat
30, 11, 15, 9,bat
31, 0, 45, 33,bat
31, 1, 9, 21,bat
31, 2, 17, 47,bat
31, 3, 1, 40,bat
31, 4, 5, 46,bat
31, 5, 32, 50,bat
31, 6, 14, 38,bat
31, 7, 20, 19,bat
31, 8, 45, 27,bat
31, 9, 48, 3,bat
31, 10, 43, 40,bat
31, 11, 15, 8,bat
32, 0, 45, 32,bat
32, 1, 9, 22,bat
32, 2, 17, 46,bat
32, 3, 0, 40,bat
32, 4, 6, 46,bat
32, 5, 32, 50,bat
32, 6, 15, 38,bat
32, 7, 19, 19,bat
32, 8, 44, 27,bat
32, 9, 48, 2,bat
32, 10, 43, 41,bat
32, 11, 15, 7,bat
33, 0, 45, 31,bat
33, 1, 8, 22,bat
33, 2, 17, 45,bat
33, 3, 1, 40,bat
33, 4, 6, 47,bat
33, 5, 32, 50,bat
33, 6, 15, 37,bat
33, 7, 20, 19,bat
33, 8, 44, 28,bat
33, 9, 47, 2,bat
33, 10, 43, 40,bat
33, 11, 15, 8,bat
34, 0, 44, 31,bat
34, 1, 8, 21,bat
34, 2, 17, 44,bat
34, 3, 2, 40,bat
34, 4, 6, 46,bat
34, 5, 32, 50,bat
34, 6, 15, 38,bat
34, 7, 21, 19,bat
34, 8, 44, 27,bat
34, 9, 46, 2,bat
34, 10, 43, 39,bat
34, 11, 15, 9,bat
35, 0, 44, 30,bat
35, 1, 8, 20,bat
35, 2, 18, 44,bat
35, 3, 2, 39,bat
35, 4, 6, 47,bat
35, 5, 32, 49,bat
35, 6, 16, 38,bat
35, 7, 20, 19,bat
35, 8, 45, 27,bat
35, 9, 45, 2,bat
35, 10, 42, 39,bat
35, 11, 15, 10,bat
36, 0, 44, 29,bat
36, 1, 8, 19,bat
36, 2, 19, 44,bat
36, 3, 3, 39,bat
36, 4, 7, 47,bat
36, 5, 32, 50,bat
36, 6, 15, 38,bat
36, 7, 19, 19,bat
36, 8, 45, 28,bat
36, 9, 45, 3,bat
36, 10, 41, 39,bat
36, 11, 15, 11,bat
37, 0, 44, 28,bat
37, 1, 9, 19,bat
37, 2, 19, 45,bat
37, 3, 3, 38,bat
37, 4, 7, 46,bat
37, 5, 31, 50,bat
37, 6, 15, 39,bat
37, 7, 19, 20,bat
37, 8, 45, 27,bat
37, 9, 45, 4,bat
37, 10, 40, 39,bat
37, 11, 15, 12,bat
38, 0, 44, 27,bat
38, 1, 10, 19,bat
38, 2, 19, 44,bat
38, 3, 4, 38,bat
38, 4, 7, 45,bat
38, 5, 30, 50,bat
38, 6, 14, 39,bat
38, 7, 19, 21,bat
38, 8, 44, 27,bat
38, 9, 45, 3,bat
38, 10, 41, 39,bat
38, 11, 16, 12,bat
39, 0, 43, 27,bat
39, 1, 9, 19,bat
39, 2, 19, 43,bat
39, 3, 3, 38,bat
39, 4, 7, 46,bat
39, 5, 31, 50,bat
39, 6, 13, 39,bat
39, 7, 18, 21,bat
39, 8, 44, 28,bat
39, 9, 46, 3,bat
39, 10, 40, 39,bat
39, 11, 17, 12,bat
40, 0, 44, 27,bat
40, 1, 9, 20,bat
40, 2, 20, 43,bat
40, 3, 3, 39,bat
40, 4, 8, 46,bat
40, 5, 31, 50,bat
40, 6, 13, 40,bat
40, 7, 17, 21,bat
40, 8, 44, 29,bat
40, 9, 47, 3,bat
40, 10, 40, 38,bat
40, 11, 18, 12,bat
41, 0, 43, 27,bat
41, 1, 9, 19,bat
41, 2, 19, 43,bat
41, 3, 4, 39,bat
41, 4, 8, 45,bat
41, 5, 32, 50,bat
41, 6, 13, 41,bat
41, 7, 18, 21,bat
41, 8, 43, 29,bat
41, 9, 47, 2,bat
41, 10, 40, 39,bat
41, 11, 18, 13,bat
42, 0, 42, 27,bat
42, 1, 9, 20,bat
42, 2, 18, 43,bat
42, 3, 4, 40,bat
42, 4, 7, 45,bat
42, 5, 32, 49,bat
42, 6, 14, 41,bat
42, 7, 19, 21,bat
42, 8, 43, 30,bat
42, 9, 47, 3,bat
42, 10, 41, 39,bat
42, 11, 18, 12,bat
43, 0, 42, 26,bat
43, 1, 8, 20,bat
43, 2, 17, 43,bat
43, 3, 4, 41,bat
43, 4, 6, 45,bat
43, 5, 32, 48,bat
43, 6, 14, 42,bat
43, 7, 19, 20,bat
43, 8, 42, 30,bat
43, 9, 48, 3,bat
43, 10, 41, 40,bat
43, 11, 19, 12,bat
44, 0, 42, 27,bat
44, 1, 8, 21,bat
44, 2, 17, 44,bat
44, 3, 3, 41,bat
44, 4, 5, 45,bat
44, 5, 33, 48,bat
44, 6, 14, 41,bat
44, 7, 20, 20,bat
44, 8, 41, 30,bat
44, 9, 47, 3,bat
44, 10, 40, 40,bat
44, 11, 18, 12,bat
45, 0, 42, 26,bat
45, 1, 8, 22,bat
45, 2, 17, 45,bat
45, 3, 3, 42,bat
45, 4, 5, 46,bat
45, 5, 33, 49,bat
45, 6, 14, 42,bat
45, 7, 20, 19,bat
45, 8, 40, 30,bat
45, 9, 47, 4,bat
45, 10, 39, 40,bat
45, 11, 17, 12,bat
46, 0, 42, 25,bat
46, 1, 8, 21,bat
46, 2, 17, 46,bat
46, 3, 4, 42,bat
46, 4, 6, 46,bat
46, 5, 33, 50,bat
46, 6, 14, 41,bat
46, 7, 20, 20,bat
46, 8, 39, 30,bat
46, 9, 48, 4,bat
46, 10, 39, 41,bat
46, 11, 17, 11,bat
47, 0, 42, 24,bat
47, 1, 9, 21,bat
47, 2, 16, 46,bat
47, 3, 4, 43,bat
47, 4, 7, 46,bat
47, 5, 33, 50,bat
47, 6, 13, 41,bat
47, 7, 21, 20,bat
47, 8, 39, 31,bat
47, 9, 49, 4,bat
47, 10, 40, 41,bat
47, 11, 18, 11,bat
48, 0, 42, 25,bat
48, 1, 9, 22,bat
48, 2, 15, 46,bat
48, 3, 4, 42,bat
48, 4, 7, 45,bat
48, 5, 32, 50,bat
48, 6, 12, 41,bat
48, 7, 21, 21,bat
48, 8, 39, 30,bat
48, 9, 49, 5,bat
48, 10, 41, 41,bat
48, 11, 18, 12,bat
49, 0, 42, 24,bat
49, 1, 9, 21,bat
49, 2, 14, 46,bat
49, 3, 5, 42,bat
49, 4, 6, 45,bat
49, 5, 33, 50,bat
49, 6, 13, 41,bat
49, 7, 22, 21,bat
49, 8, 39, 29,bat
49, 9, 49, 4,bat
49, 10, 41, 40,bat
49, 11, 18, 13,bat
50, 0, 43, 24,bat
50, 1, 9, 22,bat
50, 2, 14, 45,bat
50, 3, 5, 43,bat
50, 4, 6, 46,bat
50, 5, 32, 50,bat
50, 6, 13, 42,bat
50, 7, 22, 20,bat
50, 8, 38, 29,bat
50, 9, 49, 3,bat
50, 10, 41, 39,bat
50, 11, 19, 13,bat
51, 0, 43, 25,bat
51, 1, 9, 21,bat
51, 2, 15, 45,bat
51, 3, 5, 44,bat
51, 4, 6, 45,bat
51, 5, 32, 50,bat
51, 6, 13, 41,bat
51, 7, 23, 20,bat
51, 8, 38, 28,bat
51, 9, 50, 3,bat
51, 10, 41, 40,bat
51, 11, 19, 14,bat
52, 0, 44, 25,bat
52, 1, 8, 21,bat
52, 2, 15, 46,bat
52, 3, 4, 44,bat
52, 4, 7, 45,bat
52, 5, 32, 49,bat
52, 6, 13, 42,bat
52, 7, 23, 19,bat
52, 8, 38, 27,bat
52, 9, 50, 4,bat
52, 10, 41, 39,bat
52, 11, 19, 13,bat
53, 0, 44, 26,bat
53, 1, 8, 20,bat
53, 2, 15, 45,bat
53, 3, 4, 45,bat
53, 4, 7, 46,bat
53, 5, 32, 48,bat
53, 6, 14, 42,bat
53, 7, 22, 19,bat
53, 8, 39, 27,bat
53, 9, 50, 5,bat
53, 10, 42, 39,bat
53, 11, 19, 14,bat
54, 0, 43, 26,bat
54, 1, 9, 20,bat
54, 2, 15, 46,bat
54, 3, 3, 45,bat
54, 4, 6, 46,bat
54, 5, 32, 47,bat
54, 6, 14, 41,bat
54, 7, 23, 19,bat
54, 8, 40, 27,bat
54, 9, 50, 5,bat
54, 10, 41, 39,bat
54, 11, 18, 14,bat
55, 0, 42, 26,bat
55, 1, 8, 20,bat
55, 2, 15, 47,bat
55, 3, 3, 44,bat
55, 4, 5, 46,bat
55, 5, 32, 48,bat
55, 6, 14, 40,bat
55, 7, 22, 19,bat
55, 8, 41, 27,bat
55, 9, 50, 4,bat
55, 10, 41, 40,bat
55, 11, 18, 13,bat
56, 0, 43, 26,bat
56, 1, 8, 19,bat
56, 2, 15, 46,bat
56, 3, 3, 45,bat
56, 4, 6, 46,bat
56, 5, 32, 49,bat
56, 6, 15, 40,bat
56, 7, 22, 20,bat
56, 8, 41, 26,bat
56, 9, 50, 5,bat
56, 10, 40, 40,bat
56, 11, 18, 14,bat
57, 0, 44, 26,bat
57, 1, 9, 19,bat
57, 2, 15, 47,bat
57, 3, 2, 45,bat
57, 4, 7, 46,bat
57, 5, 32, 48,bat
57, 6, 14, 40,bat
57, 7, 22, 19,bat
57, 8, 40, 26,bat
57, 9, 50, 6,bat
57, 10, 40, 41,bat
57, 11, 18, 15,bat
58, 0, 44, 25,bat
58, 1, 9, 20,bat
58, 2, 15, 46,bat
58, 3, 1, 45,bat
58, 4, 7, 45,bat
58, 5, 33, 48,bat
58, 6, 14, 41,bat
58, 7, 22, 18,bat
58, 8, 39, 26,bat
58, 9, 50, 5,bat
58, 10, 41, 41,bat
58, 11, 18, 14,bat
59, 0, 44, 24,bat
59, 1, 9, 19,bat
59, 2, 14, 46,bat
59, 3, 1, 46,bat
59, 4, 8, 45,bat
59, 5, 32, 48,bat
59, 6, 15, 41,bat
59, 7, 22, 17,bat
59, 8, 39, 25,bat
59, 9, 49, 5,bat
59, 10, 40, 41,bat
59, 11, 18, 13,bat
60, 0, 45, 24,bat
60, 1, 10, 19,bat
60, 2, 15, 46,bat
60, 3, 1, 47,bat
60, 4, 8, 44,bat
60, 5, 32, 47,bat
60, 6, 14, 41,bat
60, 7, 22, 18,bat
60, 8, 38, 25,bat
60, 9, 49, 6,bat
60, 10, 40, 40,bat
60, 11, 18, 12,bat
61, 0, 46, 24,bat
61, 1, 9, 19,bat
61, 2, 15, 47,bat
61, 3, 0, 47,bat
61, 4, 8, 45,bat
61, 5, 33, 47,bat
61, 6, 14, 42,bat
61, 7, 22, 17,bat
61, 8, 38, 24,bat
61, 9, 49, 5,bat
61, 10, 40, 41,bat
61, 11, 19, 12,bat
62, 0, 46, 23,bat
62, 1, 10, 19,bat
62, 2, 16, 47,bat
62, 3, 0, 46,bat
62, 4, 9, 45,bat
62, 5, 32, 47,bat
62, 6, 15, 42,bat
62, 7, 23, 17,bat
62, 8, 39, 24,bat
62, 9, 50, 5,bat
62, 10, 41, 41,bat
62, 11, 19, 13,bat
63, 0, 47, 23,bat
63, 1, 10, 20,bat
63, 2, 17, 47,bat
63, 3, 1, 46,bat
63, 4, 10, 45,bat
63, 5, 32, 48,bat
63, 6, 15, 41,bat
63, 7, 23, 16,bat
63, 8, 38, 24,bat
63, 9, 49, 5,bat
63, 10, 41, 42,bat
63, 11, 18, 13,bat
64, 0, 48, 23,bat
64, 1, 11, 20,bat
64, 2, 18, 47,bat
64, 3, 1, 47,bat
64, 4, 9, 45,bat
64, 5, 31, 48,bat
64, 6, 15, 40,bat
64, 7, 24, 16,bat
64, 8, 38, 25,bat
64, 9, 48, 5,bat
64, 10, 42, 42,bat
64, 11, 17, 13,bat
65, 0, 47, 23,bat
65, 1, 11, 19,bat
65, 2, 18, 48,bat
65, 3, 1, 48,bat
65, 4, 8, 45,bat
65, 5, 30, 48,bat
65, 6, 15, 41,bat
65, 7, 24, 17,bat
65, 8, 37, 25,bat
65, 9, 47, 5,bat
65, 10, 42, 43,bat
65, 11, 18, 13,bat
66, 0, 47, 22,bat
66, 1, 11, 18,bat
66, 2, 18, 49,bat
66, 3, 0, 48,bat
66, 4, 8, 46,bat
66, 5, 31, 48,bat
66, 6, 14, 41,bat
66, 7, 24, 18,bat
66, 8, 37, 24,bat
66, 9, 47, 4,bat
66, 10, 42, 42,bat
66, 11, 19, 13,bat
67, 0, 48, 22,bat
67, 1, 11, 17,bat
67, 2, 18, 50,bat
67, 3, 0, 47,bat
67, 4, 9, 46,bat
67, 5, 31, 49,bat
67, 6, 13, 41,bat
67, 7, 24, 19,bat
67, 8, 36, 24,bat
67, 9, 47, 5,bat
67, 10, 42, 41,bat
67, 11, 19, 14,bat
68, 0, 48, 21,bat
68, 1, 10, 17,bat
68, 2, 18, 50,bat
68, 3, 0, 47,bat
68, 4, 9, 47,bat
68, 5, 32, 49,bat
68, 6, 14, 41,bat
68, 7, 23, 19,bat
68, 8, 35, 24,bat
68, 9, 48, 5,bat
68, 10, 41, 41,bat
68, 11, 20, 14,bat
69, 0, 47, 21,bat
69, 1, 10, 16,bat
69, 2, 18, 49,bat
69, 3, 0, 48,bat
69, 4, 9, 46,bat
69, 5, 32, 50,bat
69, 6, 15, 41,bat
69, 7, 24, 19,bat
69, 8, 35, 25,bat
69, 9, 47, 5,bat
69, 10, 40, 41,bat
69, 11, 21, 14,bat
70, 0, 47, 20,bat
70, 1, 11, 16,bat
70, 2, 18, 50,bat
70, 3, 0, 48,bat
70, 4, 10, 46,bat
70, 5, 32, 50,bat
70, 6, 14, 41,bat
70, 7, 25, 19,bat
70, 8, 35, 26,bat
70, 9, 48, 5,bat
70, 10, 41, 41,bat
70, 11, 20, 14,bat
71, 0, 47, 19,bat
71, 1, 11, 17,bat
71, 2, 17, 50,bat
71, 3, 0, 47,bat
71, 4, 10, 45,bat
71, 5, 31, 50,bat
71, 6, 13, 41,bat
71, 7, 24, 19,bat
71, 8, 36, 26,bat
71, 9, 47, 5,bat
71, 10, 41, 40,bat
71, 11, 20, 13,bat
72, 0, 47, 18,bat
72, 1, 12, 17,bat
72, 2, 16, 50,bat
72, 3, 0, 48,bat
72, 4, 9, 45,bat
72, 5, 32, 50,bat
72, 6, 13, 40,bat
72, 7, 25, 19,bat
72, 8, 35, 26,bat
72, 9, 47, 4,bat
72, 10, 40, 40,bat
72, 11, 21, 13,bat
73, 0, 48, 18,bat
73, 1, 13, 17,bat
73, 2, 16, 50,bat
73, 3, 0, 48,bat
73, 4, 9, 46,bat
73, 5, 32, 49,bat
73, 6, 13, 41,bat
73, 7, 25, 18,bat
73, 8, 34, 26,bat
73, 9, 47, 3,bat
73, 10, 40, 41,bat
73, 11, 21, 12,bat
74, 0, 48, 19,bat
74, 1, 14, 17,bat
74, 2, 15, 50,bat
74, 3, 1, 48,bat
74, 4, 10, 46,bat
74, 5, 33, 49,bat
74, 6, 12, 41,bat
74, 7, 26, 18,bat
74, 8, 33, 26,bat
74, 9, 46, 3,bat
74, 10, 40, 40,bat
74, 11, 21, 13,bat
75, 0, 47, 19,bat
75, 1, 14, 16,bat
75, 2, 15, 50,bat
75, 3, 0, 48,bat
75, 4, 9, 46,bat
75, 5, 33, 50,bat
75, 6, 11, 41,bat
75, 7, 27, 18,bat
75, 8, 33, 27,bat
75, 9, 46, 2,bat
75, 10, 40, 39,bat
75, 11, 22, 13,bat
76, 0, 46, 19,bat
76, 1, 15, 16,bat
76, 2, 15, 50,bat
76, 3, 1, 48,bat
76, 4, 10, 46,bat
76, 5, 32, 50,bat
76, 6, 10, 41,bat
76, 7, 27, 19,bat
76, 8, 32, 27,bat
76, 9, 47, 2,bat
76, 10, 39, 39,bat
76, 11, 22, 12,bat
77, 0, 47, 19,bat
77, 1, 15, 17,bat
77, 2, 15, 50,bat
77, 3, 1, 49,bat
77, 4, 10, 47,bat
77, 5, 31, 50,bat
77, 6, 9, 41,bat
77, 7, 27, 18,bat
77, 8, 32, 26,bat
77, 9, 47, 3,bat
77, 10, 39, 40,bat
77, 11, 22, 11,bat
78, 0, 47, 18,bat
78, 1, 15, 16,bat
78, 2, 15, 50,bat
78, 3, 1, 48,bat
78, 4, 9, 47,bat
78, 5, 31, 49,bat
78, 6, 8, 41,bat
78, 7, 27, 17,bat
78, 8, 33, 26,bat
78, 9, 47, 2,bat
78, 10, 38, 40,bat
78, 11, 21, 11,bat
79, 0, 48, 18,bat
79, 1, 14, 16,bat
79, 2, 15, 49,bat
79, 3, 1, 49,bat
79, 4, 8, 47,bat
79, 5, 30, 49,bat
79, 6, 8, 40,bat
79, 7, 27, 18,bat
79, 8, 32, 26,bat
79, 9, 46, 2,bat
79, 10, 38, 39,bat
79, 11, 21, 10,bat
80, 0, 47, 18,bat
80, 1, 14, 15,bat
80, 2, 14, 49,bat
80, 3, 0, 49,bat
80, 4, 8, 48,bat
80, 5, 29, 49,bat
80, 6, 8, 39,bat
80, 7, 28, 18,bat
80, 8, 33, 26,bat
80, 9, 46, 3,bat
80, 10, 37, 39,bat
80, 11, 22, 10,bat
81, 0, 46, 18,bat
81, 1, 13, 15,bat
81, 2, 13, 49,bat
81, 3, 0, 50,bat
81, 4, 8, 49,bat
81, 5, 29, 50,bat
81, 6, 9, 39,bat
81, 7, 29, 18,bat
81, 8, 33, 27,bat
81, 9, 45, 3,bat
81, 10, 38, 39,bat
81, 11, 22, 11,bat
82, 0, 46, 19,bat
82, 1, 12, 15,bat
82, 2, 13, 50,bat
82, 3, 0, 49,bat
82, 4, 7, 49,bat
82, 5, 29, 50,bat
82, 6, 10, 39,bat
82, 7, 29, 19,bat
82, 8, 33, 26,bat
82, 9, 45, 4,bat
82, 10, 39, 39,bat
82, 11, 22, 10,bat
83, 0, 45, 19,bat
83, 1, 12, 16,bat
83, 2, 13, 49,bat
83, 3, 0, 49,bat
83, 4, 8, 49,bat
83, 5, 29, 49,bat
83, 6, 10, 40,bat
83, 7, 29, 20,bat
83, 8, 32, 26,bat
83, 9, 44, 4,bat
83, 10, 38, 39,bat
83, 11, 22, 11,bat
84, 0, 45, 20,bat
84, 1, 12, 17,bat
84, 2, 13, 48,bat
84, 3, 1, 49,bat
84, 4, 7, 49,bat
84, 5, 30, 49,bat
84, 6, 9, 40,bat
84, 7, 30, 20,bat
84, 8, 33, 26,bat
84, 9, 43, 4,bat
84, 10, 37, 39,bat
84, 11, 22, 12,bat
85, 0, 45, 21,bat
85, 1, 13, 17,bat
85, 2, 13, 47,bat
85, 3, 1, 50,bat
85, 4, 7, 48,bat
85, 5, 30, 50,bat
85, 6, 9, 39,bat
85, 7, 29, 20,bat
85, 8, 33, 27,bat
85, 9, 43, 3,bat
85, 10, 37, 38,bat
85, 11, 22, 11,bat
86, 0, 45, 22,bat
86, 1, 12, 17,bat
86, 2, 14, 47,bat
86, 3, 1, 50,bat
86, 4, 7, 47,bat
86, 5, 29, 50,bat
86, 6, 10, 39,bat
86, 7, 30, 20,bat
86, 8, 33, 26,bat
86, 9, 43, 4,bat
86, 10, 37, 39,bat
86, 11, 21, 11,bat
87, 0, 45, 23,bat
87, 1, 11, 17,bat
87, 2, 14, 48,bat
87, 3, 2, 50,bat
87, 4, 8, 47,bat
87, 5, 29, 50,bat
87, 6, 11, 39,bat
87, 7, 29, 20,bat
87, 8, 34, 26,bat
87, 9, 43, 3,bat
87, 10, 38, 39,bat
87, 11, 20, 11,bat
88, 0, 46, 23,bat
88, 1, 11, 18,bat
88, 2, 15, 48,bat
88, 3, 2, 50,bat
88, 4, 7, 47,bat
88, 5, 30, 50,bat
88, 6, 10, 39,bat
88, 7, 29, 21,bat
88, 8, 35, 26,bat
88, 9, 42, 3,bat
88, 10, 37, 39,bat
88, 11, 19, 11,bat
89, 0, 47, 23,bat
89, 1, 11, 19,bat
89, 2, 15, 49,bat
89, 3, 3, 50,bat
89, 4, 7, 48,bat
89, 5, 30, 49,bat
89, 6, 10, 40,bat
89, 7, 29, 22,bat
89, 8, 35, 25,bat
89, 9, 43, 3,bat
89, 10, 37, 38,bat
89, 11, 19, 12,bat
90, 0, 46, 23,bat
90, 1, 11, 20,bat
90, 2, 15, 48,bat
90, 3, 4, 50,bat
90, 4, 7, 47,bat
90, 5, 31, 49,bat
90, 6, 10, 41,bat
90, 7, 29, 23,bat
90, 8, 36, 25,bat
90, 9, 43, 4,bat
90, 10, 38, 38,bat
90, 11, 18, 12,bat
91, 0, 46, 24,bat
91, 1, 11, 19,bat
91, 2, 16, 48,bat
91, 3, 4, 49,bat
91, 4, 6, 47,bat
91, 5, 31, 48,bat
91, 6, 9, 41,bat
91, 7, 29, 24,bat
91, 8, 37, 25,bat
91, 9, 44, 4,bat
91, 10, 38, 39,bat
91, 11, 19, 12,bat
92, 0, 45, 24,bat
92, 1, 11, 20,bat
92, 2, 17, 48,bat
92, 3, 5, 49,bat
92, 4, 6, 48,bat
92, 5, 30, 48,bat
92, 6, 10, 41,bat
92, 7, 28, 24,bat
92, 8, 37, 24,bat
92, 9, 45, 4,bat
92, 10, 38, 40,bat
92, 11, 18, 12,bat
93, 0, 45, 23,bat
93, 1, 11, 21,bat
93, 2, 16, 48,bat
93, 3, 5, 50,bat
93, 4, 5, 48,bat
93, 5, 30, 49,bat
93, 6, 10, 40,bat
93, 7, 28, 23,bat
93, 8, 36, 24,bat
93, 9, 45, 5,bat
93, 10, 38, 41,bat
93, 11, 17, 12,bat
94, 0, 45, 24,bat
94, 1, 11, 22,bat
94, 2, 16, 47,bat
94, 3, 6, 50,bat
94, 4, 5, 47,bat
94, 5, 30, 48,bat
94, 6, 10, 39,bat
94, 7, 29, 23,bat
94, 8, 36, 23,bat
94, 9, 44, 5,bat
94, 10, 38, 42,bat
94, 11, 17, 13,bat
95, 0, 44, 24,bat
95, 1, 11, 21,bat
95, 2, 15, 47,bat
95, 3, 5, 50,bat
95, 4, 5, 48,bat
95, 5, 29, 48,bat
95, 6, 11, 39,bat
95, 7, 29, 22,bat
95, 8, 36, 24,bat
95, 9, 44, 6,bat
95, 10, 37, 42,bat
95, 11, 18, 13,bat
96, 0, 44, 23,bat
96, 1, 10, 21,bat
96, 2, 15, 46,bat
96, 3, 6, 50,bat
96, 4, 5, 49,bat
96, 5, 28, 48,bat
96, 6, 10, 39,bat
96, 7, 30, 22,bat
96, 8, 37, 24,bat
96, 9, 45, 6,bat
96, 10, 36, 42,bat
96, 11, 18, 14,bat
97, 0, 44, 22,bat
97, 1, 10, 22,bat
97, 2, 14, 46,bat
97, 3, 6, 49,bat
97, 4, 5, 48,bat
97, 5, 27, 48,bat
97, 6, 10, 38,bat
97, 7, 31, 22,bat
97, 8, 38, 24,bat
97, 9, 46, 6,bat
97, 10, 36, 41,bat
97, 11, 18, 15,bat
98, 0, 44, 23,bat
98, 1, 9, 22,bat
98, 2, 14, 45,bat
98, 3, 6, 48,bat
98, 4, 5, 47,bat
98, 5, 26, 48,bat
98, 6, 9, 38,bat
98, 7, 31, 23,bat
98, 8, 38, 23,bat
98, 9, 46, 5,bat
98, 10, 37, 41,bat
98, 11, 18, 16,bat
99, 0, 43, 23,bat
99, 1, 9, 21,bat
99, 2, 15, 45,bat
99, 3, 7, 48,bat
99, 4, 6, 47,bat
99, 5, 25, 48,bat
99, 6, 9, 37,bat
99, 7, 30, 23,bat
99, 8, 38, 24,bat
99, 9, 46, 6,bat
99, 10, 36, 41,bat
99, 11, 18, 15,bat
100, 0, 42, 23,bat
100, 1, 10, 21,bat
100, 2, 14, 45,bat
100, 3, 7, 49,bat
100, 4, 5, 47,bat
100, 5, 26, 48,bat
100, 6, 8, 37,bat
100, 7, 30, 24,bat
100, 8, 38, 25,bat
100, 9, 46, 5,bat
100, 10, 36, 40,bat
100, 11, 17, 15,bat
`

const NPU_DATA_SP = `
timestep,agent,x-coor,y-coor,label
1,0,48,24,friendly
1,1,8,22,friendly
1,2,12,50,friendly
1,3,0,36,friendly
1,4,3,46,friendly
1,5,26,49,friendly
1,6,18,44,friendly
1,7,19,10,friendly
1,8,44,24,friendly
1,9,50,10,friendly
1,10,40,37,friendly
1,11,17,12,friendly
2,0,48,25,friendly
2,1,8,21,friendly
2,2,11,50,friendly
2,3,0,35,friendly
2,4,4,46,friendly
2,5,26,48,friendly
2,6,18,43,friendly
2,7,20,10,friendly
2,8,43,24,friendly
2,9,50,9,friendly
2,10,39,37,friendly
2,11,17,11,friendly
3,0,49,25,friendly
3,1,8,20,friendly
3,2,12,50,friendly
3,3,0,36,friendly
3,4,5,46,friendly
3,5,27,48,friendly
3,6,19,43,friendly
3,7,20,11,friendly
3,8,44,24,friendly
3,9,50,9,friendly
3,10,39,36,friendly
3,11,17,12,friendly
4,0,49,26,friendly
4,1,7,20,friendly
4,2,12,50,friendly
4,3,0,37,friendly
4,4,4,46,friendly
4,5,28,48,friendly
4,6,18,43,friendly
4,7,20,10,friendly
4,8,45,24,friendly
4,9,49,9,friendly
4,10,40,36,friendly
4,11,16,12,friendly
5,0,48,26,friendly
5,1,7,19,friendly
5,2,11,50,friendly
5,3,0,36,friendly
5,4,4,47,friendly
5,5,28,49,friendly
5,6,18,44,friendly
5,7,19,10,friendly
5,8,45,25,friendly
5,9,48,9,friendly
5,10,40,37,friendly
5,11,15,12,friendly
6,0,47,26,friendly
6,1,8,19,friendly
6,2,11,49,friendly
6,3,1,36,friendly
6,4,4,48,friendly
6,5,28,48,friendly
6,6,19,44,friendly
6,7,20,10,friendly
6,8,46,25,friendly
6,9,49,9,friendly
6,10,40,38,friendly
6,11,16,12,friendly
7,0,47,25,friendly
7,1,7,19,friendly
7,2,10,49,friendly
7,3,0,36,friendly
7,4,4,49,friendly
7,5,27,48,friendly
7,6,19,45,friendly
7,7,20,9,friendly
7,8,45,25,friendly
7,9,50,9,friendly
7,10,40,39,friendly
7,11,16,13,friendly
8,0,47,26,friendly
8,1,6,19,friendly
8,2,10,50,friendly
8,3,0,35,friendly
8,4,3,49,friendly
8,5,27,47,friendly
8,6,19,44,friendly
8,7,20,10,friendly
8,8,45,26,friendly
8,9,50,8,friendly
8,10,40,38,friendly
8,11,16,12,friendly
9,0,46,26,friendly
9,1,6,20,friendly
9,2,10,50,friendly
9,3,0,36,friendly
9,4,4,49,friendly
9,5,28,47,friendly
9,6,18,44,friendly
9,7,19,10,friendly
9,8,45,25,friendly
9,9,49,8,friendly
9,10,40,39,friendly
9,11,16,11,friendly
10,0,47,26,friendly
10,1,6,19,friendly
10,2,11,50,friendly
10,3,0,36,friendly
10,4,4,48,friendly
10,5,29,47,friendly
10,6,18,43,friendly
10,7,19,11,friendly
10,8,44,25,friendly
10,9,49,7,friendly
10,10,41,39,friendly
10,11,16,10,friendly
11,0,47,27,friendly
11,1,5,19,friendly
11,2,11,49,friendly
11,3,0,36,friendly
11,4,5,48,friendly
11,5,28,47,friendly
11,6,18,42,friendly
11,7,18,11,friendly
11,8,44,24,friendly
11,9,48,7,friendly
11,10,40,39,friendly
11,11,17,10,friendly
12,0,47,28,friendly
12,1,5,20,friendly
12,2,11,48,friendly
12,3,0,36,friendly
12,4,4,48,friendly
12,5,28,48,friendly
12,6,19,42,friendly
12,7,18,12,friendly
12,8,45,24,friendly
12,9,47,7,friendly
12,10,40,38,friendly
12,11,18,10,friendly
13,0,47,29,friendly
13,1,5,19,friendly
13,2,10,48,friendly
13,3,0,36,friendly
13,4,4,49,friendly
13,5,28,49,friendly
13,6,18,42,friendly
13,7,18,13,friendly
13,8,46,24,friendly
13,9,46,7,friendly
13,10,41,38,friendly
13,11,18,9,friendly
14,0,47,30,friendly
14,1,4,19,friendly
14,2,11,48,friendly
14,3,1,36,friendly
14,4,4,48,friendly
14,5,29,49,friendly
14,6,18,43,friendly
14,7,18,14,friendly
14,8,45,24,friendly
14,9,47,7,friendly
14,10,41,39,friendly
14,11,19,9,friendly
15,0,47,29,friendly
15,1,5,19,friendly
15,2,10,48,friendly
15,3,0,36,friendly
15,4,3,48,friendly
15,5,29,48,friendly
15,6,18,42,friendly
15,7,19,14,friendly
15,8,46,24,friendly
15,9,47,8,friendly
15,10,41,40,friendly
15,11,18,9,friendly
16,0,47,30,friendly
16,1,5,20,friendly
16,2,10,49,friendly
16,3,1,36,friendly
16,4,4,48,friendly
16,5,29,49,friendly
16,6,18,41,friendly
16,7,20,14,friendly
16,8,47,24,friendly
16,9,47,7,friendly
16,10,40,40,friendly
16,11,18,10,friendly
17,0,47,31,friendly
17,1,6,20,friendly
17,2,10,48,friendly
17,3,1,37,friendly
17,4,4,47,friendly
17,5,29,50,friendly
17,6,18,40,friendly
17,7,19,14,friendly
17,8,46,24,friendly
17,9,46,7,friendly
17,10,41,40,friendly
17,11,19,10,friendly
18,0,46,31,friendly
18,1,7,20,friendly
18,2,11,48,friendly
18,3,1,38,friendly
18,4,3,47,friendly
18,5,30,50,friendly
18,6,18,39,friendly
18,7,19,15,friendly
18,8,45,24,friendly
18,9,47,7,friendly
18,10,42,40,friendly
18,11,19,11,friendly
19,0,46,30,friendly
19,1,7,21,friendly
19,2,11,47,friendly
19,3,2,38,friendly
19,4,4,47,friendly
19,5,30,49,friendly
19,6,18,40,friendly
19,7,20,15,friendly
19,8,45,23,friendly
19,9,47,8,friendly
19,10,42,39,friendly
19,11,19,12,friendly
20,0,47,30,friendly
20,1,7,20,friendly
20,2,12,47,friendly
20,3,2,39,friendly
20,4,3,47,friendly
20,5,31,49,friendly
20,6,17,40,friendly
20,7,19,15,friendly
20,8,46,23,friendly
20,9,47,7,friendly
20,10,42,40,friendly
20,11,19,11,friendly
21,0,46,30,friendly
21,1,6,20,friendly
21,2,12,46,friendly
21,3,1,39,friendly
21,4,3,46,friendly
21,5,32,49,friendly
21,6,17,41,friendly
21,7,20,15,friendly
21,8,45,23,friendly
21,9,48,7,friendly
21,10,42,39,friendly
21,11,18,11,friendly
22,0,47,30,friendly
22,1,5,20,friendly
22,2,13,46,friendly
22,3,1,40,friendly
22,4,3,47,friendly
22,5,31,49,friendly
22,6,16,41,friendly
22,7,21,15,friendly
22,8,45,24,friendly
22,9,49,7,friendly
22,10,42,38,friendly
22,11,17,11,friendly
23,0,46,30,friendly
23,1,4,20,friendly
23,2,14,46,friendly
23,3,0,40,friendly
23,4,4,47,friendly
23,5,31,50,friendly
23,6,17,41,friendly
23,7,21,14,friendly
23,8,45,23,friendly
23,9,48,7,friendly
23,10,42,39,friendly
23,11,16,11,friendly
24,0,46,31,friendly
24,1,4,21,friendly
24,2,13,46,friendly
24,3,0,40,friendly
24,4,4,48,friendly
24,5,30,50,friendly
24,6,17,40,friendly
24,7,21,15,friendly
24,8,44,23,friendly
24,9,48,6,friendly
24,10,43,39,friendly
24,11,15,11,friendly
25,0,45,31,friendly
25,1,5,21,friendly
25,2,12,46,friendly
25,3,1,40,friendly
25,4,5,48,friendly
25,5,29,50,friendly
25,6,16,40,friendly
25,7,21,16,friendly
25,8,43,23,friendly
25,9,48,5,friendly
25,10,42,39,friendly
25,11,15,10,friendly
26,0,45,32,friendly
26,1,6,21,friendly
26,2,13,46,friendly
26,3,0,40,friendly
26,4,6,48,friendly
26,5,29,50,friendly
26,6,16,41,friendly
26,7,21,17,friendly
26,8,43,24,friendly
26,9,49,5,friendly
26,10,43,39,friendly
26,11,15,9,friendly
27,0,45,31,friendly
27,1,6,22,friendly
27,2,14,46,friendly
27,3,0,41,friendly
27,4,6,47,friendly
27,5,30,50,friendly
27,6,16,40,friendly
27,7,21,18,friendly
27,8,44,24,friendly
27,9,50,5,friendly
27,10,44,39,friendly
27,11,16,9,friendly
28,0,46,31,friendly
28,1,7,22,friendly
28,2,15,46,friendly
28,3,1,41,friendly
28,4,7,47,friendly
28,5,30,50,friendly
28,6,15,40,friendly
28,7,20,18,friendly
28,8,44,25,friendly
28,9,50,4,friendly
28,10,44,40,friendly
28,11,15,9,friendly
29,0,46,32,friendly
29,1,8,22,friendly
29,2,16,46,friendly
29,3,1,40,friendly
29,4,7,46,friendly
29,5,30,50,friendly
29,6,14,40,friendly
29,7,21,18,friendly
29,8,44,26,friendly
29,9,49,4,friendly
29,10,43,40,friendly
29,11,15,8,friendly
30,0,46,33,friendly
30,1,9,22,friendly
30,2,16,47,friendly
30,3,1,39,friendly
30,4,6,46,friendly
30,5,31,50,friendly
30,6,14,39,friendly
30,7,21,19,friendly
30,8,45,26,friendly
30,9,48,4,friendly
30,10,44,40,friendly
30,11,15,9,friendly
31,0,45,33,friendly
31,1,9,21,friendly
31,2,17,47,friendly
31,3,1,40,friendly
31,4,5,46,friendly
31,5,32,50,friendly
31,6,14,38,friendly
31,7,20,19,friendly
31,8,45,27,friendly
31,9,48,3,friendly
31,10,43,40,friendly
31,11,15,8,friendly
32,0,45,32,friendly
32,1,9,22,friendly
32,2,17,46,friendly
32,3,0,40,friendly
32,4,6,46,friendly
32,5,32,50,friendly
32,6,15,38,friendly
32,7,19,19,friendly
32,8,44,27,friendly
32,9,48,2,friendly
32,10,43,41,friendly
32,11,15,7,friendly
33,0,45,31,friendly
33,1,8,22,friendly
33,2,17,45,friendly
33,3,1,40,friendly
33,4,6,47,friendly
33,5,32,50,friendly
33,6,15,37,friendly
33,7,20,19,friendly
33,8,44,28,friendly
33,9,47,2,friendly
33,10,43,40,friendly
33,11,15,8,friendly
34,0,44,31,friendly
34,1,8,21,friendly
34,2,17,44,friendly
34,3,2,40,friendly
34,4,6,46,friendly
34,5,32,50,friendly
34,6,15,38,friendly
34,7,21,19,friendly
34,8,44,27,friendly
34,9,46,2,friendly
34,10,43,39,friendly
34,11,15,9,friendly
35,0,44,30,friendly
35,1,8,20,friendly
35,2,18,44,friendly
35,3,2,39,friendly
35,4,6,47,friendly
35,5,32,49,friendly
35,6,16,38,friendly
35,7,20,19,friendly
35,8,45,27,friendly
35,9,45,2,friendly
35,10,42,39,friendly
35,11,15,10,friendly
36,0,44,29,friendly
36,1,8,19,friendly
36,2,19,44,friendly
36,3,3,39,friendly
36,4,7,47,friendly
36,5,32,50,friendly
36,6,15,38,friendly
36,7,19,19,friendly
36,8,45,28,friendly
36,9,45,3,friendly
36,10,41,39,friendly
36,11,15,11,friendly
37,0,44,28,friendly
37,1,9,19,friendly
37,2,19,45,friendly
37,3,3,38,friendly
37,4,7,46,friendly
37,5,31,50,friendly
37,6,15,39,friendly
37,7,19,20,friendly
37,8,45,27,friendly
37,9,45,4,friendly
37,10,40,39,friendly
37,11,15,12,friendly
38,0,44,27,friendly
38,1,10,19,friendly
38,2,19,44,friendly
38,3,4,38,friendly
38,4,7,45,friendly
38,5,30,50,friendly
38,6,14,39,friendly
38,7,19,21,friendly
38,8,44,27,friendly
38,9,45,3,friendly
38,10,41,39,friendly
38,11,16,12,friendly
39,0,43,27,friendly
39,1,9,19,friendly
39,2,19,43,friendly
39,3,3,38,friendly
39,4,7,46,friendly
39,5,31,50,friendly
39,6,13,39,friendly
39,7,18,21,friendly
39,8,44,28,friendly
39,9,46,3,friendly
39,10,40,39,friendly
39,11,17,12,friendly
40,0,44,27,friendly
40,1,9,20,friendly
40,2,20,43,friendly
40,3,3,39,friendly
40,4,8,46,friendly
40,5,31,50,friendly
40,6,13,40,friendly
40,7,17,21,friendly
40,8,44,29,friendly
40,9,47,3,friendly
40,10,40,38,friendly
40,11,18,12,friendly
41,0,43,27,friendly
41,1,9,19,friendly
41,2,19,43,friendly
41,3,4,39,friendly
41,4,8,45,friendly
41,5,32,50,friendly
41,6,13,41,friendly
41,7,18,21,friendly
41,8,43,29,friendly
41,9,47,2,friendly
41,10,40,39,friendly
41,11,18,13,friendly
42,0,42,27,friendly
42,1,9,20,friendly
42,2,18,43,friendly
42,3,4,40,friendly
42,4,7,45,friendly
42,5,32,49,friendly
42,6,14,41,friendly
42,7,19,21,friendly
42,8,43,30,friendly
42,9,47,3,friendly
42,10,41,39,friendly
42,11,18,12,friendly
43,0,42,26,friendly
43,1,8,20,friendly
43,2,17,43,friendly
43,3,4,41,friendly
43,4,6,45,friendly
43,5,32,48,friendly
43,6,14,42,friendly
43,7,19,20,friendly
43,8,42,30,friendly
43,9,48,3,friendly
43,10,41,40,friendly
43,11,19,12,friendly
44,0,42,27,friendly
44,1,8,21,friendly
44,2,17,44,friendly
44,3,3,41,friendly
44,4,5,45,friendly
44,5,33,48,friendly
44,6,14,41,friendly
44,7,20,20,friendly
44,8,41,30,friendly
44,9,47,3,friendly
44,10,40,40,friendly
44,11,18,12,friendly
45,0,42,26,friendly
45,1,8,22,friendly
45,2,17,45,friendly
45,3,3,42,friendly
45,4,5,46,friendly
45,5,33,49,friendly
45,6,14,42,friendly
45,7,20,19,friendly
45,8,40,30,friendly
45,9,47,4,friendly
45,10,39,40,friendly
45,11,17,12,friendly
46,0,42,25,friendly
46,1,8,21,friendly
46,2,17,46,friendly
46,3,4,42,friendly
46,4,6,46,friendly
46,5,33,50,friendly
46,6,14,41,friendly
46,7,20,20,friendly
46,8,39,30,friendly
46,9,48,4,friendly
46,10,39,41,friendly
46,11,17,11,friendly
47,0,42,24,friendly
47,1,9,21,friendly
47,2,16,46,friendly
47,3,4,43,friendly
47,4,7,46,friendly
47,5,33,50,friendly
47,6,13,41,friendly
47,7,21,20,friendly
47,8,39,31,friendly
47,9,49,4,friendly
47,10,40,41,friendly
47,11,18,11,friendly
48,0,42,25,friendly
48,1,9,22,friendly
48,2,15,46,friendly
48,3,4,42,friendly
48,4,7,45,friendly
48,5,32,50,friendly
48,6,12,41,friendly
48,7,21,21,friendly
48,8,39,30,friendly
48,9,49,5,friendly
48,10,41,41,friendly
48,11,18,12,friendly
49,0,42,24,friendly
49,1,9,21,friendly
49,2,14,46,friendly
49,3,5,42,friendly
49,4,6,45,friendly
49,5,33,50,friendly
49,6,13,41,friendly
49,7,22,21,friendly
49,8,39,29,friendly
49,9,49,4,friendly
49,10,41,40,friendly
49,11,18,13,friendly
50,0,43,24,friendly
50,1,9,22,friendly
50,2,14,45,friendly
50,3,5,43,friendly
50,4,6,46,friendly
50,5,32,50,friendly
50,6,13,42,friendly
50,7,22,20,friendly
50,8,38,29,friendly
50,9,49,3,friendly
50,10,41,39,friendly
50,11,19,13,friendly
51,0,43,25,friendly
51,1,9,21,friendly
51,2,15,45,friendly
51,3,5,44,friendly
51,4,6,45,friendly
51,5,32,50,friendly
51,6,13,41,friendly
51,7,23,20,friendly
51,8,38,28,friendly
51,9,50,3,friendly
51,10,41,40,friendly
51,11,19,14,friendly
52,0,44,25,friendly
52,1,8,21,friendly
52,2,15,46,friendly
52,3,4,44,friendly
52,4,7,45,friendly
52,5,32,49,friendly
52,6,13,42,friendly
52,7,23,19,friendly
52,8,38,27,friendly
52,9,50,4,friendly
52,10,41,39,friendly
52,11,19,13,friendly
53,0,44,26,friendly
53,1,8,20,friendly
53,2,15,45,friendly
53,3,4,45,friendly
53,4,7,46,friendly
53,5,32,48,friendly
53,6,14,42,friendly
53,7,22,19,friendly
53,8,39,27,friendly
53,9,50,5,friendly
53,10,42,39,friendly
53,11,19,14,friendly
54,0,43,26,friendly
54,1,9,20,friendly
54,2,15,46,friendly
54,3,3,45,friendly
54,4,6,46,friendly
54,5,32,47,friendly
54,6,14,41,friendly
54,7,23,19,friendly
54,8,40,27,friendly
54,9,50,5,friendly
54,10,41,39,friendly
54,11,18,14,friendly
55,0,42,26,friendly
55,1,8,20,friendly
55,2,15,47,friendly
55,3,3,44,friendly
55,4,5,46,friendly
55,5,32,48,friendly
55,6,14,40,friendly
55,7,22,19,friendly
55,8,41,27,friendly
55,9,50,4,friendly
55,10,41,40,friendly
55,11,18,13,friendly
56,0,43,26,friendly
56,1,8,19,friendly
56,2,15,46,friendly
56,3,3,45,friendly
56,4,6,46,friendly
56,5,32,49,friendly
56,6,15,40,friendly
56,7,22,20,friendly
56,8,41,26,friendly
56,9,50,5,friendly
56,10,40,40,friendly
56,11,18,14,friendly
57,0,44,26,friendly
57,1,9,19,friendly
57,2,15,47,friendly
57,3,2,45,friendly
57,4,7,46,friendly
57,5,32,48,friendly
57,6,14,40,friendly
57,7,22,19,friendly
57,8,40,26,friendly
57,9,50,6,friendly
57,10,40,41,friendly
57,11,18,15,friendly
58,0,44,25,friendly
58,1,9,20,friendly
58,2,15,46,friendly
58,3,1,45,friendly
58,4,7,45,friendly
58,5,33,48,friendly
58,6,14,41,friendly
58,7,22,18,friendly
58,8,39,26,friendly
58,9,50,5,friendly
58,10,41,41,friendly
58,11,18,14,friendly
59,0,44,24,friendly
59,1,9,19,friendly
59,2,14,46,friendly
59,3,1,46,friendly
59,4,8,45,friendly
59,5,32,48,friendly
59,6,15,41,friendly
59,7,22,17,friendly
59,8,39,25,friendly
59,9,49,5,friendly
59,10,40,41,friendly
59,11,18,13,friendly
60,0,45,24,friendly
60,1,10,19,friendly
60,2,15,46,friendly
60,3,1,47,friendly
60,4,8,44,friendly
60,5,32,47,friendly
60,6,14,41,friendly
60,7,22,18,friendly
60,8,38,25,friendly
60,9,49,6,friendly
60,10,40,40,friendly
60,11,18,12,friendly
61,0,46,24,friendly
61,1,9,19,friendly
61,2,15,47,friendly
61,3,0,47,friendly
61,4,8,45,friendly
61,5,33,47,friendly
61,6,14,42,friendly
61,7,22,17,friendly
61,8,38,24,friendly
61,9,49,5,friendly
61,10,40,41,friendly
61,11,19,12,friendly
62,0,46,23,friendly
62,1,10,19,friendly
62,2,16,47,friendly
62,3,0,46,friendly
62,4,9,45,friendly
62,5,32,47,friendly
62,6,15,42,friendly
62,7,23,17,friendly
62,8,39,24,friendly
62,9,50,5,friendly
62,10,41,41,friendly
62,11,19,13,friendly
63,0,47,23,friendly
63,1,10,20,friendly
63,2,17,47,friendly
63,3,1,46,friendly
63,4,10,45,friendly
63,5,32,48,friendly
63,6,15,41,friendly
63,7,23,16,friendly
63,8,38,24,friendly
63,9,49,5,friendly
63,10,41,42,friendly
63,11,18,13,friendly
64,0,48,23,friendly
64,1,11,20,friendly
64,2,18,47,friendly
64,3,1,47,friendly
64,4,9,45,friendly
64,5,31,48,friendly
64,6,15,40,friendly
64,7,24,16,friendly
64,8,38,25,friendly
64,9,48,5,friendly
64,10,42,42,friendly
64,11,17,13,friendly
65,0,47,23,friendly
65,1,11,19,friendly
65,2,18,48,friendly
65,3,1,48,friendly
65,4,8,45,friendly
65,5,30,48,friendly
65,6,15,41,friendly
65,7,24,17,friendly
65,8,37,25,friendly
65,9,47,5,friendly
65,10,42,43,friendly
65,11,18,13,friendly
66,0,47,22,friendly
66,1,11,18,friendly
66,2,18,49,friendly
66,3,0,48,friendly
66,4,8,46,friendly
66,5,31,48,friendly
66,6,14,41,friendly
66,7,24,18,friendly
66,8,37,24,friendly
66,9,47,4,friendly
66,10,42,42,friendly
66,11,19,13,friendly
67,0,48,22,friendly
67,1,11,17,friendly
67,2,18,50,friendly
67,3,0,47,friendly
67,4,9,46,friendly
67,5,31,49,friendly
67,6,13,41,friendly
67,7,24,19,friendly
67,8,36,24,friendly
67,9,47,5,friendly
67,10,42,41,friendly
67,11,19,14,friendly
68,0,48,21,friendly
68,1,10,17,friendly
68,2,18,50,friendly
68,3,0,47,friendly
68,4,9,47,friendly
68,5,32,49,friendly
68,6,14,41,friendly
68,7,23,19,friendly
68,8,35,24,friendly
68,9,48,5,friendly
68,10,41,41,friendly
68,11,20,14,friendly
69,0,47,21,friendly
69,1,10,16,friendly
69,2,18,49,friendly
69,3,0,48,friendly
69,4,9,46,friendly
69,5,32,50,friendly
69,6,15,41,friendly
69,7,24,19,friendly
69,8,35,25,friendly
69,9,47,5,friendly
69,10,40,41,friendly
69,11,21,14,friendly
70,0,47,20,friendly
70,1,11,16,friendly
70,2,18,50,friendly
70,3,0,48,friendly
70,4,10,46,friendly
70,5,32,50,friendly
70,6,14,41,friendly
70,7,25,19,friendly
70,8,35,26,friendly
70,9,48,5,friendly
70,10,41,41,friendly
70,11,20,14,friendly
71,0,47,19,friendly
71,1,11,17,friendly
71,2,17,50,friendly
71,3,0,47,friendly
71,4,10,45,friendly
71,5,31,50,friendly
71,6,13,41,friendly
71,7,24,19,friendly
71,8,36,26,friendly
71,9,47,5,friendly
71,10,41,40,friendly
71,11,20,13,friendly
72,0,47,18,friendly
72,1,12,17,friendly
72,2,16,50,friendly
72,3,0,48,friendly
72,4,9,45,friendly
72,5,32,50,friendly
72,6,13,40,friendly
72,7,25,19,friendly
72,8,35,26,friendly
72,9,47,4,friendly
72,10,40,40,friendly
72,11,21,13,friendly
73,0,48,18,friendly
73,1,13,17,friendly
73,2,16,50,friendly
73,3,0,48,friendly
73,4,9,46,friendly
73,5,32,49,friendly
73,6,13,41,friendly
73,7,25,18,friendly
73,8,34,26,friendly
73,9,47,3,friendly
73,10,40,41,friendly
73,11,21,12,friendly
74,0,48,19,friendly
74,1,14,17,friendly
74,2,15,50,friendly
74,3,1,48,friendly
74,4,10,46,friendly
74,5,33,49,friendly
74,6,12,41,friendly
74,7,26,18,friendly
74,8,33,26,friendly
74,9,46,3,friendly
74,10,40,40,friendly
74,11,21,13,friendly
75,0,47,19,friendly
75,1,14,16,friendly
75,2,15,50,friendly
75,3,0,48,friendly
75,4,9,46,friendly
75,5,33,50,friendly
75,6,11,41,friendly
75,7,27,18,friendly
75,8,33,27,friendly
75,9,46,2,friendly
75,10,40,39,friendly
75,11,22,13,friendly
76,0,46,19,friendly
76,1,15,16,friendly
76,2,15,50,friendly
76,3,1,48,friendly
76,4,10,46,friendly
76,5,32,50,friendly
76,6,10,41,friendly
76,7,27,19,friendly
76,8,32,27,friendly
76,9,47,2,friendly
76,10,39,39,friendly
76,11,22,12,friendly
77,0,47,19,friendly
77,1,15,17,friendly
77,2,15,50,friendly
77,3,1,49,friendly
77,4,10,47,friendly
77,5,31,50,friendly
77,6,9,41,friendly
77,7,27,18,friendly
77,8,32,26,friendly
77,9,47,3,friendly
77,10,39,40,friendly
77,11,22,11,friendly
78,0,47,18,friendly
78,1,15,16,friendly
78,2,15,50,friendly
78,3,1,48,friendly
78,4,9,47,friendly
78,5,31,49,friendly
78,6,8,41,friendly
78,7,27,17,friendly
78,8,33,26,friendly
78,9,47,2,friendly
78,10,38,40,friendly
78,11,21,11,friendly
79,0,48,18,friendly
79,1,14,16,friendly
79,2,15,49,friendly
79,3,1,49,friendly
79,4,8,47,friendly
79,5,30,49,friendly
79,6,8,40,friendly
79,7,27,18,friendly
79,8,32,26,friendly
79,9,46,2,friendly
79,10,38,39,friendly
79,11,21,10,friendly
80,0,47,18,friendly
80,1,14,15,friendly
80,2,14,49,friendly
80,3,0,49,friendly
80,4,8,48,friendly
80,5,29,49,friendly
80,6,8,39,friendly
80,7,28,18,friendly
80,8,33,26,friendly
80,9,46,3,friendly
80,10,37,39,friendly
80,11,22,10,friendly
81,0,46,18,friendly
81,1,13,15,friendly
81,2,13,49,friendly
81,3,0,50,friendly
81,4,8,49,friendly
81,5,29,50,friendly
81,6,9,39,friendly
81,7,29,18,friendly
81,8,33,27,friendly
81,9,45,3,friendly
81,10,38,39,friendly
81,11,22,11,friendly
82,0,46,19,friendly
82,1,12,15,friendly
82,2,13,50,friendly
82,3,0,49,friendly
82,4,7,49,friendly
82,5,29,50,friendly
82,6,10,39,friendly
82,7,29,19,friendly
82,8,33,26,friendly
82,9,45,4,friendly
82,10,39,39,friendly
82,11,22,10,friendly
83,0,45,19,friendly
83,1,12,16,friendly
83,2,13,49,friendly
83,3,0,49,friendly
83,4,8,49,friendly
83,5,29,49,friendly
83,6,10,40,friendly
83,7,29,20,friendly
83,8,32,26,friendly
83,9,44,4,friendly
83,10,38,39,friendly
83,11,22,11,friendly
84,0,45,20,friendly
84,1,12,17,friendly
84,2,13,48,friendly
84,3,1,49,friendly
84,4,7,49,friendly
84,5,30,49,friendly
84,6,9,40,friendly
84,7,30,20,friendly
84,8,33,26,friendly
84,9,43,4,friendly
84,10,37,39,friendly
84,11,22,12,friendly
85,0,45,21,friendly
85,1,13,17,friendly
85,2,13,47,friendly
85,3,1,50,friendly
85,4,7,48,friendly
85,5,30,50,friendly
85,6,9,39,friendly
85,7,29,20,friendly
85,8,33,27,friendly
85,9,43,3,friendly
85,10,37,38,friendly
85,11,22,11,friendly
86,0,45,22,friendly
86,1,12,17,friendly
86,2,14,47,friendly
86,3,1,50,friendly
86,4,7,47,friendly
86,5,29,50,friendly
86,6,10,39,friendly
86,7,30,20,friendly
86,8,33,26,friendly
86,9,43,4,friendly
86,10,37,39,friendly
86,11,21,11,friendly
87,0,45,23,friendly
87,1,11,17,friendly
87,2,14,48,friendly
87,3,2,50,friendly
87,4,8,47,friendly
87,5,29,50,friendly
87,6,11,39,friendly
87,7,29,20,friendly
87,8,34,26,friendly
87,9,43,3,friendly
87,10,38,39,friendly
87,11,20,11,friendly
88,0,46,23,friendly
88,1,11,18,friendly
88,2,15,48,friendly
88,3,2,50,friendly
88,4,7,47,friendly
88,5,30,50,friendly
88,6,10,39,friendly
88,7,29,21,friendly
88,8,35,26,friendly
88,9,42,3,friendly
88,10,37,39,friendly
88,11,19,11,friendly
89,0,47,23,friendly
89,1,11,19,friendly
89,2,15,49,friendly
89,3,3,50,friendly
89,4,7,48,friendly
89,5,30,49,friendly
89,6,10,40,friendly
89,7,29,22,friendly
89,8,35,25,friendly
89,9,43,3,friendly
89,10,37,38,friendly
89,11,19,12,friendly
90,0,46,23,friendly
90,1,11,20,friendly
90,2,15,48,friendly
90,3,4,50,friendly
90,4,7,47,friendly
90,5,31,49,friendly
90,6,10,41,friendly
90,7,29,23,friendly
90,8,36,25,friendly
90,9,43,4,friendly
90,10,38,38,friendly
90,11,18,12,friendly
91,0,46,24,friendly
91,1,11,19,friendly
91,2,16,48,friendly
91,3,4,49,friendly
91,4,6,47,friendly
91,5,31,48,friendly
91,6,9,41,friendly
91,7,29,24,friendly
91,8,37,25,friendly
91,9,44,4,friendly
91,10,38,39,friendly
91,11,19,12,friendly
92,0,45,24,friendly
92,1,11,20,friendly
92,2,17,48,friendly
92,3,5,49,friendly
92,4,6,48,friendly
92,5,30,48,friendly
92,6,10,41,friendly
92,7,28,24,friendly
92,8,37,24,friendly
92,9,45,4,friendly
92,10,38,40,friendly
92,11,18,12,friendly
93,0,45,23,friendly
93,1,11,21,friendly
93,2,16,48,friendly
93,3,5,50,friendly
93,4,5,48,friendly
93,5,30,49,friendly
93,6,10,40,friendly
93,7,28,23,friendly
93,8,36,24,friendly
93,9,45,5,friendly
93,10,38,41,friendly
93,11,17,12,friendly
94,0,45,24,friendly
94,1,11,22,friendly
94,2,16,47,friendly
94,3,6,50,friendly
94,4,5,47,friendly
94,5,30,48,friendly
94,6,10,39,friendly
94,7,29,23,friendly
94,8,36,23,friendly
94,9,44,5,friendly
94,10,38,42,friendly
94,11,17,13,friendly
95,0,44,24,friendly
95,1,11,21,friendly
95,2,15,47,friendly
95,3,5,50,friendly
95,4,5,48,friendly
95,5,29,48,friendly
95,6,11,39,friendly
95,7,29,22,friendly
95,8,36,24,friendly
95,9,44,6,friendly
95,10,37,42,friendly
95,11,18,13,friendly
96,0,44,23,friendly
96,1,10,21,friendly
96,2,15,46,friendly
96,3,6,50,friendly
96,4,5,49,friendly
96,5,28,48,friendly
96,6,10,39,friendly
96,7,30,22,friendly
96,8,37,24,friendly
96,9,45,6,friendly
96,10,36,42,friendly
96,11,18,14,friendly
97,0,44,22,friendly
97,1,10,22,friendly
97,2,14,46,friendly
97,3,6,49,friendly
97,4,5,48,friendly
97,5,27,48,friendly
97,6,10,38,friendly
97,7,31,22,friendly
97,8,38,24,friendly
97,9,46,6,friendly
97,10,36,41,friendly
97,11,18,15,friendly
98,0,44,23,friendly
98,1,9,22,friendly
98,2,14,45,friendly
98,3,6,48,friendly
98,4,5,47,friendly
98,5,26,48,friendly
98,6,9,38,friendly
98,7,31,23,friendly
98,8,38,23,friendly
98,9,46,5,friendly
98,10,37,41,friendly
98,11,18,16,friendly
99,0,43,23,friendly
99,1,9,21,friendly
99,2,15,45,friendly
99,3,7,48,friendly
99,4,6,47,friendly
99,5,25,48,friendly
99,6,9,37,friendly
99,7,30,23,friendly
99,8,38,24,friendly
99,9,46,6,friendly
99,10,36,41,friendly
99,11,18,15,friendly
100,0,42,23,friendly
100,1,10,21,friendly
100,2,14,45,friendly
100,3,7,49,friendly
100,4,5,47,friendly
100,5,26,48,friendly
100,6,8,37,friendly
100,7,30,24,friendly
100,8,38,25,friendly
100,9,46,5,friendly
100,10,36,40,friendly
100,11,17,15,friendly
`