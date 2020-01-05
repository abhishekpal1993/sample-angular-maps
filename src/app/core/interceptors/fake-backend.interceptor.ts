import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { PostalCode } from '../../shared/models/postal-code.model';

export const POSTALCODE: PostalCode[] = [
  {
    postal_code: ' 0N4',
    latitude: 28.504386,
    longitide: 117.57372,
    id: 1
  },
  {
    postal_code: '188355 8M6',
    latitude: 59.4225,
    longitide: 30.12389,
    id: 2
  },
  {
    postal_code: '1150 4Q1',
    latitude: -37.758979,
    longitide: 176.4495638,
    id: 3
  },
  {
    postal_code: ' 0U1',
    latitude: -6.976504,
    longitide: 114.1112351,
    id: 4
  },
  {
    postal_code: '79304 CEDEX 9N6',
    latitude: 46.8118134,
    longitide: -0.5451553,
    id: 5
  },
  {
    postal_code: '379-2166 2Y6',
    latitude: 36.3798483,
    longitide: 139.1107678,
    id: 6
  },
  {
    postal_code: '622052 9U3',
    latitude: 57.9093249,
    longitide: 60.166299,
    id: 7
  },
  {
    postal_code: ' 6J5',
    latitude: 42.4782102,
    longitide: 78.3955986,
    id: 8
  },
  {
    postal_code: '69303 CEDEX 07 9O1',
    latitude: 45.7397125,
    longitide: 4.8372255,
    id: 9
  },
  {
    postal_code: ' 7H1',
    latitude: 29.746561,
    longitide: 111.778931,
    id: 10
  },
  {
    postal_code: '1693 6V5',
    latitude: -25.99566,
    longitide: 28.1971031,
    id: 11
  },
  {
    postal_code: '09015 1O2',
    latitude: 15.0690612,
    longitide: -91.6341489,
    id: 12
  },
  {
    postal_code: ' 7M4',
    latitude: 12.2651512,
    longitide: -85.0778886,
    id: 13
  },
  {
    postal_code: ' 5C5',
    latitude: 32.5836375,
    longitide: 14.0362587,
    id: 14
  },
  {
    postal_code: '0173 5C8',
    latitude: 59.9278844,
    longitide: 10.7477822,
    id: 15
  },
  {
    postal_code: ' 3Y7',
    latitude: 47.4389969,
    longitide: 101.7525358,
    id: 16
  },
  {
    postal_code: '140209 3X9',
    latitude: 51.5607333,
    longitide: 43.1402151,
    id: 17
  },
  {
    postal_code: '41-840 9X9',
    latitude: 50.3055387,
    longitide: 18.7871344,
    id: 18
  },
  {
    postal_code: '4705-653 3V7',
    latitude: 41.5054085,
    longitide: -8.4697574,
    id: 19
  },
  {
    postal_code: '2170 3E8',
    latitude: 51.2472392,
    longitide: 4.4403455,
    id: 20
  },
  {
    postal_code: ' 1Q7',
    latitude: 8.2758676,
    longitide: -70.7659102,
    id: 21
  },
  {
    postal_code: ' 7E7',
    latitude: -8.401854,
    longitide: 114.118103,
    id: 22
  },
  {
    postal_code: ' 4M9',
    latitude: -8.1855421,
    longitide: 112.0178286,
    id: 23
  },
  {
    postal_code: ' 7X9',
    latitude: -0.677334,
    longitide: 34.779603,
    id: 24
  },
  {
    postal_code: '2843 3S7',
    latitude: -32.4871605,
    longitide: -58.2510984,
    id: 25
  },
  {
    postal_code: ' 2T3',
    latitude: -7.3,
    longitide: 109.066667,
    id: 26
  },
  {
    postal_code: ' 6T4',
    latitude: 44.8990915,
    longitide: 110.1065717,
    id: 27
  },
  {
    postal_code: ' 2S3',
    latitude: -6.8931581,
    longitide: 112.438087,
    id: 28
  },
  {
    postal_code: '79260-000 3O5',
    latitude: -21.9111483,
    longitide: -56.4719928,
    id: 29
  },
  {
    postal_code: '34788 7F3',
    latitude: 19.3376878,
    longitide: -99.0591821,
    id: 30
  },
  {
    postal_code: '40726 4I0',
    latitude: 3.0100681,
    longitide: 101.5326734,
    id: 31
  },
  {
    postal_code: ' 2X5',
    latitude: -8.0796655,
    longitide: 113.3049491,
    id: 32
  },
  {
    postal_code: ' 8K3',
    latitude: 8.34816,
    longitide: -71.85849,
    id: 33
  },
  {
    postal_code: '129 55 8Y8',
    latitude: 59.2832062,
    longitide: 17.9570059,
    id: 34
  },
  {
    postal_code: '2550-523 0B1',
    latitude: 39.2699174,
    longitide: -9.1052924,
    id: 35
  },
  {
    postal_code: 'M2K 3D7',
    latitude: 49.24993,
    longitide: -55.04816,
    id: 36
  },
  {
    postal_code: '4740-497 5M3',
    latitude: 41.5237953,
    longitide: -8.7261408,
    id: 37
  },
  {
    postal_code: ' 4L6',
    latitude: -25.408157,
    longitide: -57.2875097,
    id: 38
  },
  {
    postal_code: ' 4K9',
    latitude: -9.833763,
    longitide: 124.458641,
    id: 39
  },
  {
    postal_code: ' 6V7',
    latitude: 25.783198,
    longitide: 109.607675,
    id: 40
  },
  {
    postal_code: '1240 4W1',
    latitude: 44.351935,
    longitide: -87.8445954,
    id: 41
  },
  {
    postal_code: '781-3223 4R2',
    latitude: 33.6450129,
    longitide: 133.4789243,
    id: 42
  },
  {
    postal_code: '10520 6M8',
    latitude: 10.1096551,
    longitide: 99.822979,
    id: 43
  },
  {
    postal_code: ' 5O6',
    latitude: 36.2944144,
    longitide: 28.1620173,
    id: 44
  },
  {
    postal_code: ' 0X3',
    latitude: 29.2813,
    longitide: 117.22473,
    id: 45
  },
  {
    postal_code: '180559 8W4',
    latitude: 57.8282585,
    longitide: 28.2416397,
    id: 46
  },
  {
    postal_code: '43150 9Z3',
    latitude: 13.7768017,
    longitide: 100.5593109,
    id: 47
  },
  {
    postal_code: ' 5Y1',
    latitude: 30.7016468,
    longitide: 104.0663422,
    id: 48
  },
  {
    postal_code: '40460 4E7',
    latitude: 2.9864896,
    longitide: 101.5395705,
    id: 49
  },
  {
    postal_code: '4620-400 1N6',
    latitude: 41.0734417,
    longitide: -8.6358837,
    id: 50
  },
  {
    postal_code: '346630 6S2',
    latitude: 47.5155739,
    longitide: 40.8140313,
    id: 51
  },
  {
    postal_code: '20003 8A6',
    latitude: 14.7641115,
    longitide: -89.430685,
    id: 52
  },
  {
    postal_code: '9500-014 4S7',
    latitude: 37.751046,
    longitide: -25.670123,
    id: 53
  },
  {
    postal_code: '77915-000 2L0',
    latitude: -6.0768719,
    longitide: -47.8032284,
    id: 54
  },
  {
    postal_code: '134548 8P3',
    latitude: 8.27533,
    longitide: -73.868176,
    id: 55
  },
  {
    postal_code: ' 2P9',
    latitude: 44.521785,
    longitide: 125.72862,
    id: 56
  },
  {
    postal_code: ' 0Y8',
    latitude: 27.768996,
    longitide: 112.792138,
    id: 57
  },
  {
    postal_code: '77293 7R8',
    latitude: 29.8699072,
    longitide: -95.3298675,
    id: 58
  },
  {
    postal_code: ' 0N1',
    latitude: 10.7242788,
    longitide: 39.8733409,
    id: 59
  },
  {
    postal_code: ' 9V7',
    latitude: 34.878483,
    longitide: 113.277504,
    id: 60
  },
  {
    postal_code: ' 5P3',
    latitude: 30.118912,
    longitide: 111.484536,
    id: 61
  },
  {
    postal_code: '83553 5S3',
    latitude: 29.0180288,
    longitide: -110.9119181,
    id: 62
  },
  {
    postal_code: ' 3C6',
    latitude: 10.1769828,
    longitide: 38.1239492,
    id: 63
  },
  {
    postal_code: '2705-750 9N8',
    latitude: 38.8783335,
    longitide: -9.425154,
    id: 64
  },
  {
    postal_code: '612730 5Q5',
    latitude: 51.247228,
    longitide: 58.498546,
    id: 65
  },
  {
    postal_code: '95852 7F5',
    latitude: 38.6,
    longitide: -121.45,
    id: 66
  },
  {
    postal_code: ' 4J6',
    latitude: 49.0149775,
    longitide: 31.0539028,
    id: 67
  },
  {
    postal_code: '41963 3Q2',
    latitude: 25.8007724,
    longitide: -100.4277766,
    id: 68
  },
  {
    postal_code: '368608 3J4',
    latitude: 42.0813751,
    longitide: 48.2792467,
    id: 69
  },
  {
    postal_code: ' 5Y4',
    latitude: 27.08556,
    longitide: 112.949437,
    id: 70
  },
  {
    postal_code: ' 0V3',
    latitude: 50.2603928,
    longitide: 71.5485944,
    id: 71
  },
  {
    postal_code: 'S6J 1O7',
    latitude: 50.4163784,
    longitide: -105.5361463,
    id: 72
  },
  {
    postal_code: ' 9Q4',
    latitude: -0.2467982,
    longitide: 109.6163185,
    id: 73
  },
  {
    postal_code: '80279 7L7',
    latitude: 39.7446895,
    longitide: -104.9933772,
    id: 74
  },
  {
    postal_code: ' 0U1',
    latitude: -8.1658601,
    longitide: 111.7763713,
    id: 75
  },
  {
    postal_code: ' 1D7',
    latitude: -7.2033646,
    longitide: 111.6630914,
    id: 76
  },
  {
    postal_code: ' 7E3',
    latitude: -7.633333,
    longitide: 108.133333,
    id: 77
  },
  {
    postal_code: '6529 0R6',
    latitude: 51.8417492,
    longitide: 5.8715134,
    id: 78
  },
  {
    postal_code: ' 2O4',
    latitude: 9.0796794,
    longitide: 6.0097018,
    id: 79
  },
  {
    postal_code: '76141 6I0',
    latitude: 26.2958582,
    longitide: 68.6359692,
    id: 80
  },
  {
    postal_code: '542 95 1Z6',
    latitude: 58.6429512,
    longitide: 13.6587955,
    id: 81
  },
  {
    postal_code: ' 9O8',
    latitude: 20.2506149,
    longitide: 105.9744536,
    id: 82
  },
  {
    postal_code: ' 1T2',
    latitude: -7.0206795,
    longitide: 112.3963638,
    id: 83
  },
  {
    postal_code: ' 5H4',
    latitude: 20.007968,
    longitide: 110.293561,
    id: 84
  },
  {
    postal_code: '309666 4Q1',
    latitude: 50.4213981,
    longitide: 37.8304992,
    id: 85
  },
  {
    postal_code: '169511 2A4',
    latitude: 63.593219,
    longitide: 53.9068532,
    id: 86
  },
  {
    postal_code: ' 7T0',
    latitude: -8.2909,
    longitide: 123.2391,
    id: 87
  },
  {
    postal_code: '37900-000 2F8',
    latitude: -20.7430332,
    longitide: -46.6096926,
    id: 88
  },
  {
    postal_code: ' 3B9',
    latitude: -7.1785873,
    longitide: -76.6889136,
    id: 89
  },
  {
    postal_code: ' 4G7',
    latitude: 25.770509,
    longitide: 113.014717,
    id: 90
  },
  {
    postal_code: '2509 7T8',
    latitude: 15.69327,
    longitide: 120.45936,
    id: 91
  },
  {
    postal_code: '595 94 8Z8',
    latitude: 58.3226908,
    longitide: 15.1335348,
    id: 92
  },
  {
    postal_code: '3500-548 4X4',
    latitude: 40.5544993,
    longitide: -7.9843201,
    id: 93
  },
  {
    postal_code: ' 9M3',
    latitude: 32.032726,
    longitide: 35.288375,
    id: 94
  },
  {
    postal_code: '722 44 2B0',
    latitude: 59.6637076,
    longitide: 16.5305978,
    id: 95
  },
  {
    postal_code: ' 1F3',
    latitude: -17.76667,
    longitide: -149.41667,
    id: 96
  },
  {
    postal_code: ' 6R7',
    latitude: 37.943121,
    longitide: 115.217658,
    id: 97
  },
  {
    postal_code: '25045 CEDEX 0R4',
    latitude: 47.287125,
    longitide: 5.993932,
    id: 98
  },
  {
    postal_code: ' 5B8',
    latitude: 34.8066794,
    longitide: 32.4212424,
    id: 99
  },
  {
    postal_code: ' 0Y8',
    latitude: 36.373345,
    longitide: 100.103317,
    id: 100
  }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Loaded FakeBackendInterceptor!');
    const { url, method } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/postal-codes') && method === 'GET':
          return getPostalCodes();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }

    }

    // route functions

    function getPostalCodes() {
      console.log('getPostalCodes Faked!');
      return of(new HttpResponse({ status: 200, body: POSTALCODE }));
    }
  }
}
