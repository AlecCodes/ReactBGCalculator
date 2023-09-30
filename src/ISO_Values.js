
const ISO_mg_to_mmol = {
    "0": 0.0,
    "1": 0.1,
    "2": 0.1,
    "3": 0.2,
    "4": 0.2,
    "5": 0.3,
    "6": 0.3,
    "7": 0.4,
    "8": 0.4,
    "9": 0.5,
    "10": 0.6,
    "11": 0.6,
    "12": 0.7,
    "13": 0.7,
    "14": 0.8,
    "15": 0.8,
    "16": 0.9,
    "17": 0.9,
    "18": 1.0,
    "19": 1.1,
    "20": 1.1,
    "21": 1.2,
    "22": 1.2,
    "23": 1.3,
    "24": 1.3,
    "25": 1.4,
    "26": 1.4,
    "27": 1.5,
    "28": 1.6,
    "29": 1.6,
    "30": 1.7,
    "31": 1.7,
    "32": 1.8,
    "33": 1.8,
    "34": 1.9,
    "35": 1.9,
    "36": 2.0,
    "37": 2.1,
    "38": 2.1,
    "39": 2.2,
    "40": 2.2,
    "41": 2.3,
    "42": 2.3,
    "43": 2.4,
    "44": 2.4,
    "45": 2.5,
    "46": 2.6,
    "47": 2.6,
    "48": 2.7,
    "49": 2.7,
    "50": 2.8,
    "51": 2.9,
    "52": 2.9,
    "53": 2.9,
    "54": 3.0,
    "55": 3.1,
    "56": 3.1,
    "57": 3.2,
    "58": 3.2,
    "59": 3.3,
    "60": 3.3,
    "61": 3.4,
    "62": 3.4,
    "63": 3.5,
    "64": 3.6,
    "65": 3.6,
    "66": 3.7,
    "67": 3.7,
    "68": 3.8,
    "69": 3.8,
    "70": 3.9,
    "71": 3.9,
    "72": 4.0,
    "73": 4.1,
    "74": 4.1,
    "75": 4.2,
    "76": 4.2,
    "77": 4.3,
    "78": 4.3,
    "79": 4.4,
    "80": 4.4,
    "81": 4.5,
    "82": 4.6,
    "83": 4.6,
    "84": 4.7,
    "85": 4.7,
    "86": 4.8,
    "87": 4.8,
    "88": 4.9,
    "89": 4.9,
    "90": 5.0,
    "91": 5.1,
    "92": 5.1,
    "93": 5.2,
    "94": 5.2,
    "95": 5.3,
    "96": 5.3,
    "97": 5.4,
    "98": 5.4,
    "99": 5.5,
    "100": 5.5,
    "101": 5.6,
    "102": 5.7,
    "103": 5.7,
    "104": 5.8,
    "105": 5.8,
    "106": 5.9,
    "107": 5.9,
    "108": 6.0,
    "109": 6.0,
    "110": 6.1,
    "111": 6.2,
    "112": 6.2,
    "113": 6.3,
    "114": 6.3,
    "115": 6.4,
    "116": 6.4,
    "117": 6.5,
    "118": 6.5,
    "119": 6.6,
    "120": 6.7,
    "121": 6.7,
    "122": 6.8,
    "123": 6.8,
    "124": 6.9,
    "125": 6.9,
    "126": 7.0,
    "127": 7.0,
    "128": 7.1,
    "129": 7.2,
    "130": 7.2,
    "131": 7.3,
    "132": 7.3,
    "133": 7.4,
    "134": 7.4,
    "135": 7.5,
    "136": 7.5,
    "137": 7.6,
    "138": 7.7,
    "139": 7.7,
    "140": 7.8,
    "141": 7.8,
    "142": 7.9,
    "143": 7.9,
    "144": 8.0,
    "145": 8.0,
    "146": 8.1,
    "147": 8.2,
    "148": 8.2,
    "149": 8.3,
    "150": 8.3,
    "151": 8.4,
    "152": 8.4,
    "153": 8.5,
    "154": 8.5,
    "155": 8.6,
    "156": 8.7,
    "157": 8.7,
    "158": 8.8,
    "159": 8.8,
    "160": 8.9,
    "161": 8.9,
    "162": 9.0,
    "163": 9.0,
    "164": 9.1,
    "165": 9.2,
    "166": 9.2,
    "167": 9.3,
    "168": 9.3,
    "169": 9.4,
    "170": 9.4,
    "171": 9.5,
    "172": 9.5,
    "173": 9.6,
    "174": 9.7,
    "175": 9.7,
    "176": 9.8,
    "177": 9.8,
    "178": 9.9,
    "179": 9.9,
    "180": 10.0,
    "181": 10.0,
    "182": 10.1,
    "183": 10.2,
    "184": 10.2,
    "185": 10.3,
    "186": 10.3,
    "187": 10.4,
    "188": 10.4,
    "189": 10.5,
    "190": 10.5,
    "191": 10.6,
    "192": 10.7,
    "193": 10.7,
    "194": 10.8,
    "195": 10.8,
    "196": 10.9,
    "197": 10.9,
    "198": 11.0,
    "199": 11.0,
    "200": 11.1,
    "201": 11.2,
    "202": 11.2,
    "203": 11.3,
    "204": 11.3,
    "205": 11.4,
    "206": 11.4,
    "207": 11.5,
    "208": 11.5,
    "209": 11.6,
    "210": 11.7,
    "211": 11.7,
    "212": 11.8,
    "213": 11.8,
    "214": 11.9,
    "215": 11.9,
    "216": 12.0,
    "217": 12.0,
    "218": 12.1,
    "219": 12.2,
    "220": 12.2,
    "221": 12.3,
    "222": 12.3,
    "223": 12.4,
    "224": 12.4,
    "225": 12.5,
    "226": 12.5,
    "227": 12.6,
    "228": 12.7,
    "229": 12.7,
    "230": 12.8,
    "231": 12.8,
    "232": 12.9,
    "233": 12.9,
    "234": 13.0,
    "235": 13.0,
    "236": 13.1,
    "237": 13.2,
    "238": 13.2,
    "239": 13.3,
    "240": 13.3,
    "241": 13.4,
    "242": 13.4,
    "243": 13.5,
    "244": 13.5,
    "245": 13.6,
    "246": 13.7,
    "247": 13.7,
    "248": 13.8,
    "249": 13.8,
    "250": 13.9,
    "251": 14.0,
    "252": 14.0,
    "253": 14.0,
    "254": 14.1,
    "255": 14.2,
    "256": 14.2,
    "257": 14.3,
    "258": 14.3,
    "259": 14.4,
    "260": 14.4,
    "261": 14.5,
    "262": 14.5,
    "263": 14.6,
    "264": 14.7,
    "265": 14.7,
    "266": 14.8,
    "267": 14.8,
    "268": 14.9,
    "269": 14.9,
    "270": 15.0,
    "271": 15.0,
    "272": 15.1,
    "273": 15.2,
    "274": 15.2,
    "275": 15.3,
    "276": 15.3,
    "277": 15.4,
    "278": 15.4,
    "279": 15.5,
    "280": 15.5,
    "281": 15.6,
    "282": 15.7,
    "283": 15.7,
    "284": 15.8,
    "285": 15.8,
    "286": 15.9,
    "287": 15.9,
    "288": 16.0,
    "289": 16.0,
    "290": 16.1,
    "291": 16.2,
    "292": 16.2,
    "293": 16.3,
    "294": 16.3,
    "295": 16.4,
    "296": 16.4,
    "297": 16.5,
    "298": 16.5,
    "299": 16.6,
    "300": 16.6,
    "301": 16.7,
    "302": 16.8,
    "303": 16.8,
    "304": 16.9,
    "305": 16.9,
    "306": 17.0,
    "307": 17.0,
    "308": 17.1,
    "309": 17.1,
    "310": 17.2,
    "311": 17.3,
    "312": 17.3,
    "313": 17.4,
    "314": 17.4,
    "315": 17.5,
    "316": 17.5,
    "317": 17.6,
    "318": 17.6,
    "319": 17.7,
    "320": 17.8,
    "321": 17.8,
    "322": 17.9,
    "323": 17.9,
    "324": 18.0,
    "325": 18.0,
    "326": 18.1,
    "327": 18.1,
    "328": 18.2,
    "329": 18.3,
    "330": 18.3,
    "331": 18.4,
    "332": 18.4,
    "333": 18.5,
    "334": 18.5,
    "335": 18.6,
    "336": 18.6,
    "337": 18.7,
    "338": 18.8,
    "339": 18.8,
    "340": 18.9,
    "341": 18.9,
    "342": 19.0,
    "343": 19.0,
    "344": 19.1,
    "345": 19.1,
    "346": 19.2,
    "347": 19.3,
    "348": 19.3,
    "349": 19.4,
    "350": 19.4,
    "351": 19.5,
    "352": 19.5,
    "353": 19.6,
    "354": 19.6,
    "355": 19.7,
    "356": 19.8,
    "357": 19.8,
    "358": 19.9,
    "359": 19.9,
    "360": 20.0,
    "361": 20.0,
    "362": 20.1,
    "363": 20.1,
    "364": 20.2,
    "365": 20.3,
    "366": 20.3,
    "367": 20.4,
    "368": 20.4,
    "369": 20.5,
    "370": 20.5,
    "371": 20.6,
    "372": 20.6,
    "373": 20.7,
    "374": 20.8,
    "375": 20.8,
    "376": 20.9,
    "377": 20.9,
    "378": 21.0,
    "379": 21.0,
    "380": 21.1,
    "381": 21.1,
    "382": 21.2,
    "383": 21.3,
    "384": 21.3,
    "385": 21.4,
    "386": 21.4,
    "387": 21.5,
    "388": 21.5,
    "389": 21.6,
    "390": 21.6,
    "391": 21.7,
    "392": 21.8,
    "393": 21.8,
    "394": 21.9,
    "395": 21.9,
    "396": 22.0,
    "397": 22.0,
    "398": 22.1,
    "399": 22.1,
    "400": 22.2,
    "401": 22.3,
    "402": 22.3,
    "403": 22.4,
    "404": 22.4,
    "405": 22.5,
    "406": 22.5,
    "407": 22.6,
    "408": 22.6,
    "409": 22.7,
    "410": 22.8,
    "411": 22.8,
    "412": 22.9,
    "413": 22.9,
    "414": 23.0,
    "415": 23.0,
    "416": 23.1,
    "417": 23.1,
    "418": 23.2,
    "419": 23.3,
    "420": 23.3,
    "421": 23.4,
    "422": 23.4,
    "423": 23.5,
    "424": 23.5,
    "425": 23.6,
    "426": 23.6,
    "427": 23.7,
    "428": 23.8,
    "429": 23.8,
    "430": 23.9,
    "431": 23.9,
    "432": 24.0,
    "433": 24.0,
    "434": 24.1,
    "435": 24.1,
    "436": 24.2,
    "437": 24.3,
    "438": 24.3,
    "439": 24.4,
    "440": 24.4,
    "441": 24.5,
    "442": 24.5,
    "443": 24.6,
    "444": 24.6,
    "445": 24.7,
    "446": 24.8,
    "447": 24.8,
    "448": 24.9,
    "449": 24.9,
    "450": 25.0,
    "451": 25.0,
    "452": 25.1,
    "453": 25.1,
    "454": 25.2,
    "455": 25.3,
    "456": 25.3,
    "457": 25.4,
    "458": 25.4,
    "459": 25.5,
    "460": 25.5,
    "461": 25.6,
    "462": 25.6,
    "463": 25.7,
    "464": 25.8,
    "465": 25.8,
    "466": 25.9,
    "467": 25.9,
    "468": 26.0,
    "469": 26.0,
    "470": 26.1,
    "471": 26.1,
    "472": 26.2,
    "473": 26.3,
    "474": 26.3,
    "475": 26.4,
    "476": 26.4,
    "477": 26.5,
    "478": 26.5,
    "479": 26.6,
    "480": 26.6,
    "481": 26.7,
    "482": 26.8,
    "483": 26.8,
    "484": 26.9,
    "485": 26.9,
    "486": 27.0,
    "487": 27.0,
    "488": 27.1,
    "489": 27.1,
    "490": 27.2,
    "491": 27.3,
    "492": 27.3,
    "493": 27.4,
    "494": 27.4,
    "495": 27.5,
    "496": 27.5,
    "497": 27.6,
    "498": 27.6,
    "499": 27.7,
    "500": 27.7,
    "501": 27.8,
    "502": 27.9,
    "503": 27.9,
    "504": 28.0,
    "505": 28.0,
    "506": 28.1,
    "507": 28.1,
    "508": 28.2,
    "509": 28.2,
    "510": 28.3,
    "511": 28.4,
    "512": 28.4,
    "513": 28.5,
    "514": 28.5,
    "515": 28.6,
    "516": 28.6,
    "517": 28.7,
    "518": 28.7,
    "519": 28.8,
    "520": 28.9,
    "521": 28.9,
    "522": 29.0,
    "523": 29.0,
    "524": 29.1,
    "525": 29.1,
    "526": 29.2,
    "527": 29.2,
    "528": 29.3,
    "529": 29.4,
    "530": 29.4,
    "531": 29.5,
    "532": 29.5,
    "533": 29.6,
    "534": 29.6,
    "535": 29.7,
    "536": 29.7,
    "537": 29.8,
    "538": 29.9,
    "539": 29.9,
    "540": 30.0,
    "541": 30.0,
    "542": 30.1,
    "543": 30.1,
    "544": 30.2,
    "545": 30.2,
    "546": 30.3,
    "547": 30.4,
    "548": 30.4,
    "549": 30.5,
    "550": 30.5,
    "551": 30.6,
    "552": 30.6,
    "553": 30.7,
    "554": 30.7,
    "555": 30.8,
    "556": 30.9,
    "557": 30.9,
    "558": 31.0,
    "559": 31.0,
    "560": 31.1,
    "561": 31.1,
    "562": 31.2,
    "563": 31.2,
    "564": 31.3,
    "565": 31.4,
    "566": 31.4,
    "567": 31.5,
    "568": 31.5,
    "569": 31.6,
    "570": 31.6,
    "571": 31.7,
    "572": 31.7,
    "573": 31.8,
    "574": 31.9,
    "575": 31.9,
    "576": 32.0,
    "577": 32.0,
    "578": 32.1,
    "579": 32.1,
    "580": 32.2,
    "581": 32.2,
    "582": 32.3,
    "583": 32.4,
    "584": 32.4,
    "585": 32.5,
    "586": 32.5,
    "587": 32.6,
    "588": 32.6,
    "589": 32.7,
    "590": 32.7,
    "591": 32.8,
    "592": 32.9,
    "593": 32.9,
    "594": 33.0,
    "595": 33.0,
    "596": 33.1,
    "597": 33.1,
    "598": 33.2,
    "599": 33.2,
    "600": 33.3
 }
 
const ISO_mg_to_mmol_float = {
0: 0.0,
1: 0.1,
2: 0.1,
3: 0.2,
4: 0.2,
5: 0.3,
6: 0.3,
7: 0.4,
8: 0.4,
9: 0.5,
10: 0.6,
11: 0.6,
12: 0.7,
13: 0.7,
14: 0.8,
15: 0.8,
16: 0.9,
17: 0.9,
18: 1.0,
19: 1.1,
20: 1.1,
21: 1.2,
22: 1.2,
23: 1.3,
24: 1.3,
25: 1.4,
26: 1.4,
27: 1.5,
28: 1.6,
29: 1.6,
30: 1.7,
31: 1.7,
32: 1.8,
33: 1.8,
34: 1.9,
35: 1.9,
36: 2.0,
37: 2.1,
38: 2.1,
39: 2.2,
40: 2.2,
41: 2.3,
42: 2.3,
43: 2.4,
44: 2.4,
45: 2.5,
46: 2.6,
47: 2.6,
48: 2.7,
49: 2.7,
50: 2.8,
51: 2.9,
52: 2.9,
53: 2.9,
54: 3.0,
55: 3.1,
56: 3.1,
57: 3.2,
58: 3.2,
59: 3.3,
60: 3.3,
61: 3.4,
62: 3.4,
63: 3.5,
64: 3.6,
65: 3.6,
66: 3.7,
67: 3.7,
68: 3.8,
69: 3.8,
70: 3.9,
71: 3.9,
72: 4.0,
73: 4.1,
74: 4.1,
75: 4.2,
76: 4.2,
77: 4.3,
78: 4.3,
79: 4.4,
80: 4.4,
81: 4.5,
82: 4.6,
83: 4.6,
84: 4.7,
85: 4.7,
86: 4.8,
87: 4.8,
88: 4.9,
89: 4.9,
90: 5.0,
91: 5.1,
92: 5.1,
93: 5.2,
94: 5.2,
95: 5.3,
96: 5.3,
97: 5.4,
98: 5.4,
99: 5.5,
100: 5.5,
101: 5.6,
102: 5.7,
103: 5.7,
104: 5.8,
105: 5.8,
106: 5.9,
107: 5.9,
108: 6.0,
109: 6.0,
110: 6.1,
111: 6.2,
112: 6.2,
113: 6.3,
114: 6.3,
115: 6.4,
116: 6.4,
117: 6.5,
118: 6.5,
119: 6.6,
120: 6.7,
121: 6.7,
122: 6.8,
123: 6.8,
124: 6.9,
125: 6.9,
126: 7.0,
127: 7.0,
128: 7.1,
129: 7.2,
130: 7.2,
131: 7.3,
132: 7.3,
133: 7.4,
134: 7.4,
135: 7.5,
136: 7.5,
137: 7.6,
138: 7.7,
139: 7.7,
140: 7.8,
141: 7.8,
142: 7.9,
143: 7.9,
144: 8.0,
145: 8.0,
146: 8.1,
147: 8.2,
148: 8.2,
149: 8.3,
150: 8.3,
151: 8.4,
152: 8.4,
153: 8.5,
154: 8.5,
155: 8.6,
156: 8.7,
157: 8.7,
158: 8.8,
159: 8.8,
160: 8.9,
161: 8.9,
162: 9.0,
163: 9.0,
164: 9.1,
165: 9.2,
166: 9.2,
167: 9.3,
168: 9.3,
169: 9.4,
170: 9.4,
171: 9.5,
172: 9.5,
173: 9.6,
174: 9.7,
175: 9.7,
176: 9.8,
177: 9.8,
178: 9.9,
179: 9.9,
180: 10.0,
181: 10.0,
182: 10.1,
183: 10.2,
184: 10.2,
185: 10.3,
186: 10.3,
187: 10.4,
188: 10.4,
189: 10.5,
190: 10.5,
191: 10.6,
192: 10.7,
193: 10.7,
194: 10.8,
195: 10.8,
196: 10.9,
197: 10.9,
198: 11.0,
199: 11.0,
200: 11.1,
201: 11.2,
202: 11.2,
203: 11.3,
204: 11.3,
205: 11.4,
206: 11.4,
207: 11.5,
208: 11.5,
209: 11.6,
210: 11.7,
211: 11.7,
212: 11.8,
213: 11.8,
214: 11.9,
215: 11.9,
216: 12.0,
217: 12.0,
218: 12.1,
219: 12.2,
220: 12.2,
221: 12.3,
222: 12.3,
223: 12.4,
224: 12.4,
225: 12.5,
226: 12.5,
227: 12.6,
228: 12.7,
229: 12.7,
230: 12.8,
231: 12.8,
232: 12.9,
233: 12.9,
234: 13.0,
235: 13.0,
236: 13.1,
237: 13.2,
238: 13.2,
239: 13.3,
240: 13.3,
241: 13.4,
242: 13.4,
243: 13.5,
244: 13.5,
245: 13.6,
246: 13.7,
247: 13.7,
248: 13.8,
249: 13.8,
250: 13.9,
251: 14.0,
252: 14.0,
253: 14.0,
254: 14.1,
255: 14.2,
256: 14.2,
257: 14.3,
258: 14.3,
259: 14.4,
260: 14.4,
261: 14.5,
262: 14.5,
263: 14.6,
264: 14.7,
265: 14.7,
266: 14.8,
267: 14.8,
268: 14.9,
269: 14.9,
270: 15.0,
271: 15.0,
272: 15.1,
273: 15.2,
274: 15.2,
275: 15.3,
276: 15.3,
277: 15.4,
278: 15.4,
279: 15.5,
280: 15.5,
281: 15.6,
282: 15.7,
283: 15.7,
284: 15.8,
285: 15.8,
286: 15.9,
287: 15.9,
288: 16.0,
289: 16.0,
290: 16.1,
291: 16.2,
292: 16.2,
293: 16.3,
294: 16.3,
295: 16.4,
296: 16.4,
297: 16.5,
298: 16.5,
299: 16.6,
300: 16.6,
301: 16.7,
302: 16.8,
303: 16.8,
304: 16.9,
305: 16.9,
306: 17.0,
307: 17.0,
308: 17.1,
309: 17.1,
310: 17.2,
311: 17.3,
312: 17.3,
313: 17.4,
314: 17.4,
315: 17.5,
316: 17.5,
317: 17.6,
318: 17.6,
319: 17.7,
320: 17.8,
321: 17.8,
322: 17.9,
323: 17.9,
324: 18.0,
325: 18.0,
326: 18.1,
327: 18.1,
328: 18.2,
329: 18.3,
330: 18.3,
331: 18.4,
332: 18.4,
333: 18.5,
334: 18.5,
335: 18.6,
336: 18.6,
337: 18.7,
338: 18.8,
339: 18.8,
340: 18.9,
341: 18.9,
342: 19.0,
343: 19.0,
344: 19.1,
345: 19.1,
346: 19.2,
347: 19.3,
348: 19.3,
349: 19.4,
350: 19.4,
351: 19.5,
352: 19.5,
353: 19.6,
354: 19.6,
355: 19.7,
356: 19.8,
357: 19.8,
358: 19.9,
359: 19.9,
360: 20.0,
361: 20.0,
362: 20.1,
363: 20.1,
364: 20.2,
365: 20.3,
366: 20.3,
367: 20.4,
368: 20.4,
369: 20.5,
370: 20.5,
371: 20.6,
372: 20.6,
373: 20.7,
374: 20.8,
375: 20.8,
376: 20.9,
377: 20.9,
378: 21.0,
379: 21.0,
380: 21.1,
381: 21.1,
382: 21.2,
383: 21.3,
384: 21.3,
385: 21.4,
386: 21.4,
387: 21.5,
388: 21.5,
389: 21.6,
390: 21.6,
391: 21.7,
392: 21.8,
393: 21.8,
394: 21.9,
395: 21.9,
396: 22.0,
397: 22.0,
398: 22.1,
399: 22.1,
400: 22.2,
401: 22.3,
402: 22.3,
403: 22.4,
404: 22.4,
405: 22.5,
406: 22.5,
407: 22.6,
408: 22.6,
409: 22.7,
410: 22.8,
411: 22.8,
412: 22.9,
413: 22.9,
414: 23.0,
415: 23.0,
416: 23.1,
417: 23.1,
418: 23.2,
419: 23.3,
420: 23.3,
421: 23.4,
422: 23.4,
423: 23.5,
424: 23.5,
425: 23.6,
426: 23.6,
427: 23.7,
428: 23.8,
429: 23.8,
430: 23.9,
431: 23.9,
432: 24.0,
433: 24.0,
434: 24.1,
435: 24.1,
436: 24.2,
437: 24.3,
438: 24.3,
439: 24.4,
440: 24.4,
441: 24.5,
442: 24.5,
443: 24.6,
444: 24.6,
445: 24.7,
446: 24.8,
447: 24.8,
448: 24.9,
449: 24.9,
450: 25.0,
451: 25.1,
452: 25.1,
453: 25.2,
454: 25.2,
455: 25.3,
456: 25.4,
457: 25.4,
458: 25.5,
459: 25.5,
460: 25.6,
461: 25.7,
462: 25.7,
463: 25.8,
464: 25.8,
465: 25.9,
466: 26.0,
467: 26.0,
468: 26.1,
469: 26.1,
470: 26.2,
471: 26.3,
472: 26.3,
473: 26.4,
474: 26.4,
475: 26.5,
476: 26.6,
477: 26.6,
478: 26.7,
479: 26.7,
480: 26.8,
481: 26.9,
482: 26.9,
483: 27.0,
484: 27.0,
485: 27.1,
486: 27.2,
487: 27.2,
488: 27.3,
489: 27.3,
490: 27.4,
491: 27.5,
492: 27.5,
493: 27.6,
494: 27.6,
495: 27.7,
496: 27.8,
497: 27.8,
498: 27.9,
499: 27.9,
500: 28.0,
501: 28.1,
502: 28.1,
503: 28.2,
504: 28.2,
505: 28.3,
506: 28.4,
507: 28.4,
508: 28.5,
509: 28.5,
510: 28.6,
511: 28.7,
512: 28.7,
513: 28.8,
514: 28.8,
515: 28.9,
516: 29.0,
517: 29.0,
518: 29.1,
519: 29.1,
520: 29.2,
521: 29.3,
522: 29.3,
523: 29.4,
524: 29.4,
525: 29.5,
526: 29.6,
527: 29.6,
528: 29.7,
529: 29.7,
530: 29.8,
531: 29.9,
532: 29.9,
533: 30.0,
534: 30.0,
535: 30.1,
536: 30.2,
537: 30.2,
538: 30.3,
539: 30.3,
540: 30.4,
541: 30.5,
542: 30.5,
543: 30.6,
544: 30.6,
545: 30.7,
546: 30.8,
547: 30.8,
548: 30.9,
549: 30.9,
550: 31.0,
551: 31.1,
552: 31.1,
553: 31.2,
554: 31.2,
555: 31.3,
556: 31.4,
557: 31.4,
558: 31.5,
559: 31.5,
560: 31.6,
561: 31.7,
562: 31.7,
563: 31.8,
564: 31.8,
565: 31.9,
566: 32.0,
567: 32.0,
568: 32.1,
569: 32.1,
570: 32.2,
571: 32.3,
572: 32.3,
573: 32.4,
574: 32.4,
575: 32.5,
576: 32.6,
577: 32.6,
578: 32.7,
579: 32.7,
580: 32.8,
581: 32.9,
582: 32.9,
583: 33.0,
584: 33.0,
585: 33.1,
586: 33.2,
587: 33.2,
588: 33.3,
589: 33.3,
590: 33.4,
591: 33.5,
592: 33.5,
593: 33.6,
594: 33.6,
595: 33.7,
596: 33.8,
597: 33.8,
598: 33.9,
599: 33.9,
600: 34.0
}

const ISO_mmol_to_mg_float = {
    0.0: 0,
0.1: 1,
0.2: 4,
0.3: 5,
0.4: 7,
0.5: 9,
0.6: 10,
0.7: 12,
0.8: 15,
0.9: 16,
1.0: 18,
1.1: 19,
1.2: 21,
1.3: 23,
1.4: 25,
1.5: 27,
1.6: 28,
1.7: 30,
1.8: 32,
1.9: 34,
2.0: 36,
2.1: 37,
2.2: 40,
2.3: 42,
2.4: 44,
2.5: 45,
2.6: 46,
2.7: 48,
2.8: 50,
2.9: 51,
3.0: 54,
3.1: 56,
3.2: 58,
3.3: 60,
3.4: 62,
3.5: 63,
3.6: 64,
3.7: 66,
3.8: 68,
3.9: 70,
4.0: 72,
4.1: 74,
4.2: 75,
4.3: 78,
4.4: 80,
4.5: 81,
4.6: 82,
4.7: 84,
4.8: 86,
4.9: 88,
5.0: 90,
5.1: 92,
5.2: 94,
5.3: 96,
5.4: 98,
5.5: 100,
5.6: 101,
5.7: 102,
5.8: 104,
5.9: 106,
6.0: 108,
6.1: 110,
6.2: 111,
6.3: 114,
6.4: 116,
6.5: 118,
6.6: 119,
6.7: 120,
6.8: 122,
6.9: 124,
7.0: 126,
7.1: 128,
7.2: 130,
7.3: 132,
7.4: 134,
7.5: 136,
7.6: 137,
7.7: 138,
7.8: 140,
7.9: 142,
8.0: 144,
8.1: 146,
8.2: 148,
8.3: 150,
8.4: 151,
8.5: 154,
8.6: 155,
8.7: 156,
8.8: 158,
8.9: 160,
9.0: 162,
9.1: 164,
9.2: 166,
9.3: 168,
9.4: 170,
9.5: 172,
9.6: 173,
9.7: 174,
9.8: 176,
9.9: 178,
10.0: 180,
10.1: 182,
10.2: 184,
10.3: 186,
10.4: 188,
10.5: 190,
10.6: 191,
10.7: 192,
10.8: 194,
10.9: 196,
11.0: 198,
11.1: 200,
11.2: 201,
11.3: 204,
11.4: 206,
11.5: 208,
11.6: 209,
11.7: 210,
11.8: 212,
11.9: 214,
12.0: 216,
12.1: 218,
12.2: 220,
12.3: 222,
12.4: 224,
12.5: 226,
12.6: 227,
12.7: 228,
12.8: 230,
12.9: 232,
13.0: 234,
13.1: 236,
13.2: 238,
13.3: 240,
13.4: 242,
13.5: 244,
13.6: 245,
13.7: 246,
13.8: 248,
13.9: 250,
14.0: 251,
14.1: 254,
14.2: 256,
14.3: 258,
14.4: 260,
14.5: 262,
14.6: 263,
14.7: 264,
14.8: 266,
14.9: 268,
15.0: 270,
15.1: 272,
15.2: 274,
15.3: 276,
15.4: 278,
15.5: 280,
15.6: 281,
15.7: 282,
15.8: 284,
15.9: 286,
16.0: 288,
16.1: 290,
16.2: 292,
16.3: 293,
16.4: 295,
16.5: 297,
16.6: 300,
16.7: 301,
16.8: 302,
16.9: 304,
17.0: 306,
17.1: 308,
17.2: 310,
17.3: 311,
17.4: 313,
17.5: 315,
17.6: 317,
17.7: 319,
17.8: 320,
17.9: 322,
18.0: 324,
18.1: 326,
18.2: 328,
18.3: 329,
18.4: 331,
18.5: 333,
18.6: 335,
18.7: 337,
18.8: 338,
18.9: 340,
19.0: 342,
19.1: 344,
19.2: 346,
19.3: 347,
19.4: 349,
19.5: 351,
19.6: 353,
19.7: 355,
19.8: 356,
19.9: 358,
20.0: 360,
20.1: 362,
20.2: 364,
20.3: 365,
20.4: 367,
20.5: 369,
20.6: 371,
20.7: 373,
20.8: 374,
20.9: 376,
21.0: 378,
21.1: 380,
21.2: 382,
21.3: 383,
21.4: 385,
21.5: 387,
21.6: 389,
21.7: 391,
21.8: 392,
21.9: 394,
22.0: 396,
22.1: 398,
22.2: 400,
22.3: 402,
22.4: 403,
22.5: 405,
22.6: 407,
22.7: 409,
22.8: 410,
22.9: 412,
23.0: 414,
23.1: 416,
23.2: 418,
23.3: 420,
23.4: 421,
23.5: 423,
23.6: 425,
23.7: 427,
23.8: 428,
23.9: 430,
24.0: 432,
24.1: 434,
24.2: 436,
24.3: 437,
24.4: 439,
24.5: 441,
24.6: 443,
24.7: 445,
24.8: 446,
24.9: 448,
25.0: 450,
25.1: 452,
25.2: 454,
25.3: 455,
25.4: 457,
25.5: 459,
25.6: 461,
25.7: 463,
25.8: 464,
25.9: 466,
26.0: 468,
26.1: 470,
26.2: 472,
26.3: 473,
26.4: 475,
26.5: 477,
26.6: 479,
26.7: 481,
26.8: 482,
26.9: 484,
27.0: 486,
27.1: 488,
27.2: 490,
27.3: 492,
27.4: 493,
27.5: 495,
27.6: 497,
27.7: 499,
27.8: 501,
27.9: 502,
28.0: 504,
28.1: 506,
28.2: 508,
28.3: 510,
28.4: 511,
28.5: 513,
28.6: 515,
28.7: 517,
28.8: 519,
28.9: 520,
29.0: 522,
29.1: 524,
29.2: 526,
29.3: 528,
29.4: 529,
29.5: 531,
29.6: 533,
29.7: 535,
29.8: 537,
29.9: 538,
30.0: 540,
30.1: 542,
30.2: 544,
30.3: 546,
30.4: 547,
30.5: 549,
30.6: 551,
30.7: 553,
30.8: 555,
30.9: 556,
31.0: 558,
31.1: 560,
31.2: 562,
31.3: 564,
31.4: 565,
31.5: 567,
31.6: 569,
31.7: 571,
31.8: 573,
31.9: 574,
32.0: 576,
32.1: 578,
32.2: 580,
32.3: 582,
32.4: 583,
32.5: 585,
32.6: 587,
32.7: 589,
32.8: 591,
32.9: 592,
33.0: 594,
33.1: 596,
33.2: 598,
33.3: 600

}

const ISO_mmol_to_mg = {
    "0.0": 0,
    "0.1": 1,
    "0.2": 4,
    "0.3": 5,
    "0.4": 7,
    "0.5": 9,
    "0.6": 10,
    "0.7": 12,
    "0.8": 15,
    "0.9": 16,
    "1.0": 18,
    "1.1": 19,
    "1.2": 21,
    "1.3": 23,
    "1.4": 25,
    "1.5": 27,
    "1.6": 28,
    "1.7": 30,
    "1.8": 32,
    "1.9": 34,
    "2.0": 36,
    "2.1": 37,
    "2.2": 40,
    "2.3": 42,
    "2.4": 44,
    "2.5": 45,
    "2.6": 46,
    "2.7": 48,
    "2.8": 50,
    "2.9": 51,
    "3.0": 54,
    "3.1": 56,
    "3.2": 58,
    "3.3": 60,
    "3.4": 62,
    "3.5": 63,
    "3.6": 64,
    "3.7": 66,
    "3.8": 68,
    "3.9": 70,
    "4.0": 72,
    "4.1": 74,
    "4.2": 75,
    "4.3": 78,
    "4.4": 80,
    "4.5": 81,
    "4.6": 82,
    "4.7": 84,
    "4.8": 86,
    "4.9": 88,
    "5.0": 90,
    "5.1": 92,
    "5.2": 94,
    "5.3": 96,
    "5.4": 98,
    "5.5": 100,
    "5.6": 101,
    "5.7": 102,
    "5.8": 104,
    "5.9": 106,
    "6.0": 108,
    "6.1": 110,
    "6.2": 111,
    "6.3": 114,
    "6.4": 116,
    "6.5": 118,
    "6.6": 119,
    "6.7": 120,
    "6.8": 122,
    "6.9": 124,
    "7.0": 126,
    "7.1": 128,
    "7.2": 130,
    "7.3": 132,
    "7.4": 134,
    "7.5": 136,
    "7.6": 137,
    "7.7": 138,
    "7.8": 140,
    "7.9": 142,
    "8.0": 144,
    "8.1": 146,
    "8.2": 148,
    "8.3": 150,
    "8.4": 151,
    "8.5": 154,
    "8.6": 155,
    "8.7": 156,
    "8.8": 158,
    "8.9": 160,
    "9.0": 162,
    "9.1": 164,
    "9.2": 166,
    "9.3": 168,
    "9.4": 170,
    "9.5": 172,
    "9.6": 173,
    "9.7": 174,
    "9.8": 176,
    "9.9": 178,
    "10.0": 180,
    "10.1": 182,
    "10.2": 184,
    "10.3": 186,
    "10.4": 188,
    "10.5": 190,
    "10.6": 191,
    "10.7": 192,
    "10.8": 194,
    "10.9": 196,
    "11.0": 198,
    "11.1": 200,
    "11.2": 201,
    "11.3": 204,
    "11.4": 206,
    "11.5": 208,
    "11.6": 209,
    "11.7": 210,
    "11.8": 212,
    "11.9": 214,
    "12.0": 216,
    "12.1": 218,
    "12.2": 220,
    "12.3": 222,
    "12.4": 224,
    "12.5": 226,
    "12.6": 227,
    "12.7": 228,
    "12.8": 230,
    "12.9": 232,
    "13.0": 234,
    "13.1": 236,
    "13.2": 238,
    "13.3": 240,
    "13.4": 242,
    "13.5": 244,
    "13.6": 245,
    "13.7": 246,
    "13.8": 248,
    "13.9": 250,
    "14.0": 251,
    "14.1": 254,
    "14.2": 256,
    "14.3": 258,
    "14.4": 260,
    "14.5": 262,
    "14.6": 263,
    "14.7": 264,
    "14.8": 266,
    "14.9": 268,
    "15.0": 270,
    "15.1": 272,
    "15.2": 274,
    "15.3": 276,
    "15.4": 278, 
    "15.5": 280,
    "15.6": 281,
    "15.7": 282,
    "15.8": 284,
    "15.9": 286,
    "16.0": 288,
    "16.1": 290,
    "16.2": 292,
    "16.3": 293,
    "16.4": 295,
    "16.5": 297,
    "16.6": 300,
    "16.7": 301,
    "16.8": 302,
    "16.9": 304,
    "17.0": 306,
    "17.1": 308,
    "17.2": 310,
    "17.3": 311,
    "17.4": 313,
    "17.5": 315,
    "17.6": 317,
    "17.7": 319,
    "17.8": 320,
    "17.9": 322,
    "18.0": 324,
    "18.1": 326,
    "18.2": 328,
    "18.3": 329,
    "18.4": 331,
    "18.5": 333,
    "18.6": 335,
    "18.7": 337,
    "18.8": 338,
    "18.9": 340,
    "19.0": 342,
    "19.1": 344,
    "19.2": 346,
    "19.3": 347,
    "19.4": 349,
    "19.5": 351,
    "19.6": 353,
    "19.7": 355,
    "19.8": 356,
    "19.9": 358,
    "20.0": 360,
    "20.1": 362,
    "20.2": 364,
    "20.3": 365,
    "20.4": 367,
    "20.5": 369,
    "20.6": 371,
    "20.7": 373,
    "20.8": 374,
    "20.9": 376,
    "21.0": 378,
    "21.1": 380,
    "21.2": 382,
    "21.3": 383,
    "21.4": 385,
    "21.5": 387,
    "21.6": 389,
    "21.7": 391,
    "21.8": 392,
    "21.9": 394,
    "22.0": 396,
    "22.1": 398,
    "22.2": 400,
    "22.3": 402,
    "22.4": 403,
    "22.5": 405,
    "22.6": 407,
    "22.7": 409,
    "22.8": 410,
    "22.9": 412,
    "23.0": 414,
    "23.1": 416,
    "23.2": 418,
    "23.3": 420,
    "23.4": 421,
    "23.5": 423,
    "23.6": 425,
    "23.7": 427,
    "23.8": 428,
    "23.9": 430,
    "24.0": 432,
    "24.1": 434,
    "24.2": 436,
    "24.3": 437,
    "24.4": 439,
    "24.5": 441,
    "24.6": 443,
    "24.7": 445,
    "24.8": 446,
    "24.9": 448,
    "25.0": 450,
    "25.1": 452,
    "25.2": 454,
    "25.3": 455,
    "25.4": 457,
    "25.5": 459,
    "25.6": 461,
    "25.7": 463,
    "25.8": 464,
    "25.9": 466,
    "26.0": 468,
    "26.1": 470,
    "26.2": 472,
    "26.3": 473,
    "26.4": 475,
    "26.5": 477,
    "26.6": 479,
    "26.7": 481,
    "26.8": 482,
    "26.9": 484,
    "27.0": 486,
    "27.1": 488,
    "27.2": 490,
    "27.3": 492,
    "27.4": 493,
    "27.5": 495,
    "27.6": 497,
    "27.7": 499,
    "27.8": 501,
    "27.9": 502,
    "28.0": 504,
    "28.1": 506,
    "28.2": 508,
    "28.3": 510,
    "28.4": 511,
    "28.5": 513,
    "28.6": 515,
    "28.7": 517,
    "28.8": 519,
    "28.9": 520,
    "29.0": 522,
    "29.1": 524,
    "29.2": 526,
    "29.3": 528,
    "29.4": 529,
    "29.5": 531,
    "29.6": 533,
    "29.7": 535,
    "29.8": 537,
    "29.9": 538,
    "30.0": 540,
    "30.1": 542,
    "30.2": 544,
    "30.3": 546,
    "30.4": 547,
    "30.5": 549,
    "30.6": 551,
    "30.7": 553,
    "30.8": 555,
    "30.9": 556,
    "31.0": 558,
    "31.1": 560,
    "31.2": 562,
    "31.3": 564,
    "31.4": 565,
    "31.5": 567,
    "31.6": 569,
    "31.7": 571,
    "31.8": 573,
    "31.9": 574,
    "32.0": 576,
    "32.1": 578,
    "32.2": 580,
    "32.3": 582,
    "32.4": 583,
    "32.5": 585,
    "32.6": 587,
    "32.7": 589,
    "32.8": 591,
    "32.9": 592,
    "33.0": 594,
    "33.1": 596,
    "33.2": 598,
    "33.3": 600
 }


module.exports = {ISO_mg_to_mmol, ISO_mmol_to_mg}