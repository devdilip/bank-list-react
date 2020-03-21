const BASE_URL = 'http://starlord.hackerearth.com/';

const setHeaders = (urlEncodedForm) => {
    const additionalHeaders = {};
    if (urlEncodedForm) {
        additionalHeaders['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
    } else {
        additionalHeaders['Content-Type'] = 'application/json';
        additionalHeaders['Accept'] = 'application/json';
    }
    additionalHeaders['Cache-Control'] = 'no-cache';
    additionalHeaders['Pragma'] = 'no-cache';
    return additionalHeaders;
};

const setOptions = (method, baseURL, url) => {
    const options = {};
    options['method'] = method;
    options['baseURL'] = baseURL;
    options['url'] = url;
    return options;
}

export const getDataOptions = (url) => {
    const options = setOptions('get', BASE_URL, url);
    options['headers'] = setHeaders(false);
    return options;
};

