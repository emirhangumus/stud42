import { Campus } from '../campus';
import { Cluster } from '../cluster';
import { CampusNames, ICampus } from '../types';

//
export class Turkey extends Campus implements ICampus {
  emoji = (): string => '🇹🇷';

  name = (): CampusNames => 'turkey';

  extractorRegexp = (): RegExp =>
    /(?<clusterWithLetter>c(?<cluster>\d+))(?<rowWithLetter>r(?<row>\d+))(?<workspaceWithLetter>s(?<workspace>\d+))/i;

  clusters(): Cluster[] {
    return [
      new Cluster({
        name: 'İstanbul',
        identifier: 'istanbul',
        // prettier-ignore
        map: [
			['T:r1', 'W:k1m01s01', 'W:k1m01s02', 'W:k1m01s03', 'W:k1m01s04', 'W:k1m01s05', 'W:k1m01s06', 'W:k1m01s07', 'W:k1m01s08', 'W:k1m01s09', 'W:k1m01s10', 'W:k1m01s11', 'T:r1'],
			['T:r2', 'W:k1m02s01', 'W:k1m02s02', 'W:k1m02s03', 'W:k1m02s04', 'W:k1m02s05', 'W:k1m02s06', 'W:k1m02s07', 'W:k1m02s08', 'W:k1m02s09', 'W:k1m02s10', 'W:k1m02s11', 'T:r2'],
			['T:r3', 'W:k1m03s01', 'W:k1m03s02', 'W:k1m03s03', 'W:k1m03s04', 'W:k1m03s05', 'W:k1m03s06', 'W:k1m03s07', 'W:k1m03s08', 'W:k1m03s09', 'W:k1m03s10', 'W:k1m03s11', 'T:r3'],
			['T:r4', 'W:k1m04s01', 'W:k1m04s02', 'W:k1m04s03', 'W:k1m04s04', 'W:k1m04s05', 'W:k1m04s06', 'W:k1m04s07', 'W:k1m04s08', 'W:k1m04s09', 'W:k1m04s10', 'W:k1m04s11', 'T:r4'],
			['T:r5', 'W:k1m05s01', 'W:k1m05s02', 'W:k1m05s03', 'W:k1m05s04', 'W:k1m05s05', 'W:k1m05s06', 'W:k1m05s07', 'W:k1m05s08', 'W:k1m05s09', 'W:k1m05s10', 'W:k1m05s11', 'T:r5'],
			['T:r6', 'W:k1m06s01', 'W:k1m06s02', 'W:k1m06s03', 'W:k1m06s04', 'W:k1m06s05', 'W:k1m06s06', 'W:k1m06s07', 'W:k1m06s08', 'W:k1m06s09', 'W:k1m06s10', 'W:k1m06s11', 'T:r6'],
			['T:r7', 'W:k1m07s01', 'W:k1m07s02', 'W:k1m07s03', 'W:k1m07s04', 'W:k1m07s05', 'W:k1m07s06', 'W:k1m07s07', 'W:k1m07s08', 'W:k1m07s09', 'W:k1m07s10', 'W:k1m07s11', 'T:r7'],
			['T:r8', 'W:k1m08s01', 'W:k1m08s02', 'W:k1m08s03', 'W:k1m08s04', 'W:k1m08s05', 'W:k1m08s06', 'W:k1m08s07', 'W:k1m08s08', 'W:k1m08s09', 'W:k1m08s10', 'T:r8', null],
			['T:r9', 'W:k1m09s01', 'W:k1m09s02', 'W:k1m09s03', 'W:k1m09s04', 'W:k1m09s05', 'W:k1m09s06', 'W:k1m09s07', 'W:k1m09s08', 'W:k1m09s09', 'W:k1m09s10', 'W:k1m09s11', 'T:r9'],
			['T:r10', 'W:k1m10s01', 'W:k1m10s02', 'W:k1m10s03', 'W:k1m10s04', 'W:k1m10s05', 'W:k1m10s06', 'W:k1m10s07', 'W:k1m10s08', 'W:k1m10s09', 'W:k1m10s10', 'W:k1m10s11', 'T:r10'],
			['T:r11', 'W:k1m11s01', 'W:k1m11s02', 'W:k1m11s03', 'W:k1m11s04', 'W:k1m11s05', 'W:k1m11s06', 'W:k1m11s07', 'T:r11', null, null, null, null],
			['T:r12', 'W:k1m12s01', 'W:k1m12s02', 'W:k1m12s03', 'W:k1m12s04', 'W:k1m12s05', 'W:k1m12s06', 'W:k1m12s07', 'T:r12', null, null, null, null],
			['T:r13', 'W:k1m13s01', 'W:k1m13s02', 'W:k1m13s03', 'W:k1m13s04', 'W:k1m13s05', 'W:k1m13s06', 'W:k1m13s07', 'W:k1m13s08', 'W:k1m13s09', 'T:r13', null, null],
			['T:r14', 'W:k1m14s01', 'W:k1m14s02', 'W:k1m14s03', 'W:k1m14s04', 'W:k1m14s05', 'W:k1m14s06', 'W:k1m14s07', 'W:k1m14s08', 'W:k1m14s09', 'W:k1m14s10', 'T:r14', null],
			['T:r15', 'W:k1m15s01', 'W:k1m15s02', 'W:k1m15s03', 'W:k1m15s04', 'W:k1m15s05', 'W:k1m15s06', 'W:k1m15s07', 'W:k1m15s08', 'W:k1m15s09', 'W:k1m15s10', 'T:r15', null],
			['T:r16', 'W:k1m16s01', 'W:k1m16s02', 'W:k1m16s03', 'W:k1m16s04', 'W:k1m16s05', 'W:k1m16s06', 'W:k1m16s07', 'W:k1m16s08', 'W:k1m16s09', 'W:k1m16s10', 'T:r16', null],
			['T:r17', 'W:k1m17s01', 'W:k1m17s02', 'W:k1m17s03', 'W:k1m17s04', 'W:k1m17s05', 'W:k1m17s06', 'W:k1m17s07', 'W:k1m17s08', 'W:k1m17s09', 'T:r17', null, null],
			['T:r18', 'W:k1m18s01', 'W:k1m18s02', 'W:k1m18s03', 'W:k1m18s04', 'W:k1m18s05', 'W:k1m18s06', 'W:k1m18s07', 'W:k1m18s08', 'W:k1m18s09', 'W:k1m18s10', 'T:r18', null],
			['T:r19', 'W:k1m19s01', 'W:k1m19s02', 'W:k1m19s03', 'W:k1m19s04', 'W:k1m19s05', 'W:k1m19s06', 'W:k1m19s07', 'W:k1m19s08', 'W:k1m19s09', 'W:k1m19s10', 'T:r19', null],
			['T:r20', 'W:k1m20s01', 'W:k1m20s02', 'W:k1m20s03', 'W:k1m20s04', 'W:k1m20s05', 'W:k1m20s06', 'W:k1m20s07', 'W:k1m20s08', 'W:k1m20s09', 'W:k1m20s10', 'T:r20', null],
			['T:r21', 'W:k1m21s01', 'W:k1m21s02', 'W:k1m21s03', 'W:k1m21s04', 'W:k1m21s05', 'W:k1m21s06', 'W:k1m21s07', 'W:k1m21s08', 'W:k1m21s09', 'T:r21', null, null],
			['T:r22', 'W:k1m22s01', 'W:k1m22s02', 'W:k1m22s03', 'W:k1m22s04', 'W:k1m22s05', 'W:k1m22s06', 'W:k1m22s07', 'W:k1m22s08', 'W:k1m22s09', 'W:k1m22s10', 'W:k1m22s11', 'T:r22'],
			['T:r23', 'W:k1m23s01', 'W:k1m23s02', 'W:k1m23s03', 'W:k1m23s04', 'W:k1m23s05', 'W:k1m23s06', 'W:k1m23s07', 'W:k1m23s08', 'W:k1m23s09', 'W:k1m23s10', 'W:k1m23s11', 'T:r23'],
			['T:r24', 'W:k1m24s01', 'W:k1m24s02', 'W:k1m24s03', 'W:k1m24s04', 'W:k1m24s05', 'W:k1m24s06', 'W:k1m24s07', 'W:k1m24s08', 'W:k1m24s09', 'W:k1m24s10', 'W:k1m24s11', 'T:r24'],
			['T:r25', 'W:k1m25s01', 'W:k1m25s02', 'W:k1m25s03', 'W:k1m25s04', 'W:k1m25s05', 'W:k1m25s06', 'W:k1m25s07', 'W:k1m25s08', 'W:k1m25s09', 'W:k1m25s10', 'T:r25', null],
			['T:r26', 'W:k1m26s01', 'W:k1m26s02', 'W:k1m26s03', 'W:k1m26s04', 'W:k1m26s05', 'W:k1m26s06', 'W:k1m26s07', 'W:k1m26s08', 'W:k1m26s09', 'W:k1m26s10', 'T:r26', null],
			['T:r27', 'W:k1m27s01', 'W:k1m27s02', 'W:k1m27s03', 'W:k1m27s04', 'W:k1m27s05', 'W:k1m27s06', 'W:k1m27s07', 'W:k1m27s08', 'W:k1m27s09', 'W:k1m27s10', 'W:k1m27s11', 'T:r27'],
			['T:r28', 'W:k1m28s01', 'W:k1m28s02', 'W:k1m28s03', 'W:k1m28s04', 'W:k1m28s05', 'W:k1m28s06', 'W:k1m28s07', 'W:k1m28s08', 'W:k1m28s09', 'W:k1m28s10', 'T:r28', null],
			['T:r29', 'W:k1m29s01', 'W:k1m29s02', 'W:k1m29s03', 'W:k1m29s04', 'W:k1m29s05', 'W:k1m29s06', 'T:r29', null, null, null, null, null],
			['T:r30', 'W:k1m30s01', 'W:k1m30s02', 'W:k1m30s03', 'W:k1m30s04', 'W:k1m30s05', 'W:k1m30s06', 'W:k1m30s07', 'W:k1m30s08', 'W:k1m30s09', 'W:k1m30s10', 'W:k1m30s11', 'T:r30'],
			['T:r31', 'W:k1m31s01', 'W:k1m31s02', 'W:k1m31s03', 'W:k1m31s04', 'W:k1m31s05', 'W:k1m31s06', 'W:k1m31s07', 'W:k1m31s08', 'W:k1m31s09', 'T:r31', null, null],
			['T:r32', 'W:k1m32s01', 'W:k1m32s02', 'W:k1m32s03', 'W:k1m32s04', 'W:k1m32s05', 'W:k1m32s06', 'W:k1m32s07', 'W:k1m32s08', 'W:k1m32s09', 'W:k1m32s10', 'W:k1m32s11', 'T:r32'],
			['T:r33', 'W:k1m33s01', 'W:k1m33s02', 'W:k1m33s03', 'W:k1m33s04', 'W:k1m33s05', 'W:k1m33s06', 'W:k1m33s07', 'W:k1m33s08', 'W:k1m33s09', 'W:k1m33s10', 'W:k1m33s11', 'T:r33'],
			['T:r34', 'W:k1m34s01', 'W:k1m34s02', 'W:k1m34s03', 'W:k1m34s04', 'W:k1m34s05', 'W:k1m34s06', 'W:k1m34s07', 'W:k1m34s08', 'W:k1m34s09', 'W:k1m34s10', 'W:k1m34s11', 'T:r34'],
			['T:r35', 'W:k1m35s01', 'W:k1m35s02', 'W:k1m35s03', 'W:k1m35s04', 'W:k1m35s05', 'W:k1m35s06', 'W:k1m35s07', 'W:k1m35s08', 'W:k1m35s09', 'W:k1m35s10', 'W:k1m35s11', 'T:r35'],
			['T:r36', 'W:k1m36s01', 'W:k1m36s02', 'W:k1m36s03', 'W:k1m36s04', 'T:r36', null, null, null, null, null, null, null],
			['T:r37', 'W:k1m37s01', 'W:k1m37s02', 'W:k1m37s03', 'W:k1m37s04', 'W:k1m37s05', 'W:k1m37s06', 'T:r37', null, null, null, null, null],
			['T:r38', 'W:k1m38s01', 'W:k1m38s02', 'W:k1m38s03', 'W:k1m38s04', 'W:k1m38s05', 'W:k1m38s06', 'T:r38', null, null, null, null, null],
			['T:r39', 'W:k1m39s01', 'W:k1m39s02', 'W:k1m39s03', 'W:k1m39s04', 'W:k1m39s05', 'W:k1m39s06', 'T:r39', null, null, null, null, null],
			['T:r40', 'W:k1m40s01', 'W:k1m40s02', 'W:k1m40s03', 'W:k1m40s04', 'W:k1m40s05', 'T:r40', null, null, null, null, null, null],
			['T:r41', 'W:k1m41s01', 'W:k1m41s02', 'W:k1m41s03', 'W:k1m41s04', 'W:k1m41s05', 'W:k1m41s06', 'T:r41', null, null, null, null, null],
			['T:r42', 'W:k1m42s01', 'W:k1m42s02', 'W:k1m42s03', 'W:k1m42s04', 'W:k1m42s05', 'W:k1m42s06', 'T:r42', null, null, null, null, null],
			['T:r43', 'W:k1m43s01', 'W:k1m43s02', 'W:k1m43s03', 'W:k1m43s04', 'W:k1m43s05', 'W:k1m43s06', 'T:r43', null, null, null, null, null],
        ],
      }),
    ];
  }
}
