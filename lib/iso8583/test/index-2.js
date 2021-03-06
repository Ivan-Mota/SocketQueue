var conv = require('binstring');
var iso8583 = require('../../../lib/iso8583');
var packager = new iso8583('smartVista');
//packager = new iso8583('openWay');
packager = new iso8583('originalProsaCH');

var strng = '9210623A40010AC180000608400138000104022047200000132047200402040360120300200000000001300DEVELKAI201000400200000088PWT';
strng = new Buffer('0200B238C4810821801A000000021000018C00000000000001000009050616502286060616500905090553998120400000000005001092837281            Venders tevendersmexicoCDMMX02710283836352435262610192019248401601920192108391820190192019210101928372! Q100002 0 ! 0400020 098  001          701 023! 0400020  00000000000 EXICOY ! EZ00098 00000000000000000000000000000101030;4111111111111111=181012210000098?1111                                                                                                                                                                                                                                                                                                                                                                                                                                                        0000000100000000000000000000000000000000000000000001029venders s.a de c.v       000009283820001110001092838211012VD000000050003800000000000000100000000000000000000120');
strng = new Buffer('0200B238C4810821801A000000021000018C00000000000001000009150157422321410157420915091553998120400000000005001092837281            Venders tevendersmexicoCDMMX02710283836352435262610192019248401601920192108391820190192019210101928372& 0000800463! C000026 098  001          7  1 023! 0400020  00000000000 EXICOY ! Q200002 09! B200158 4CF0    83                          000000010000000000000000        MEX48416091502                                                                                ! B300080 8C00000000                    1101                                         ! B400020    00            0     ! EZ00098 00000000000000000000000000000101030;4111111111111111=181012210000098?11110000000100000000000000000000000000000000000000000001029venders s.a de c.v       000009283820001110001092838211012VD000000050003800000000000000100000000000000000000120');
strng = new Buffer('0200B238C4810821801A000000021000018C00000000000001000009200732296525700732290920092053998120400000000005001092837281            Venders tevendersmexicoCDMMX02710283836352435262610192019248401601920192108391820190192019210101928372& 0000800397! C000026 098  001          7701 023! 0400020              EXICO  ! Q200002 09! B200158 4CF0    83                          000000010000000000000000        MEX48416092002                                                                                ! B300080 8C00000000                    1101                                         ! B400020    00            0     ! C4 1025110036000000000100000000000000000000000000000000000000000001029venders s.a de c.v       000009283820001110001092838211012VD00000005000380000000000000010000000000000000000');


var binStrng = strng;
//var binStrng = conv(strng, { in:'binary', out:'hex' });
//binStrng = conv('hello', { in:'binary' });
console.log(binStrng);

var msg = new Buffer(binStrng);
//msg = new Buffer(binStrng);

console.log('Original message: ');
console.log(msg);
console.log();

console.log('Parsed message fields: ');
var parsed = packager.unpack(msg);
console.log(parsed);
console.log();

console.log('Repacked message: ');
var msg = packager.packWithBinMask(parsed);
console.log(msg);

