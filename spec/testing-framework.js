const assertEquals = (actualResult, expectedResult) => actualResult === expectedResult;

const assertTrue = actualResult => actualResult === true;

const assertFalse = actualResult => actualResult === false;

function assertNull(actualResult) {
    return actualResult === null
};

module.export = {
    assertEquals,
    assertFalse,
    assertNull,
    assertTrue
};