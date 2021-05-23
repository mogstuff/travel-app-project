// this fixes the ReferenceError: regeneratorRuntime is not defined issue
// see https://spectrum.chat/jest/general/referenceerror-regeneratorruntime-is-not-defined~b3ef9b65-87cd-4e27-9730-f90b6eeff155
import 'regenerator-runtime/runtime';

import { loadLatestTripData } from '../src/client/js/localStorageHandler';

describe("testing loadLatestTripData function", () => {
    test('It should exist as a function', () => {
        expect(loadLatestTripData).toBeDefined();
});

});