self.__prx$config = {
    prefix: '/service/',
    bare: 'https://incog.dev/bare/',
    encodeUrl: prx.codec.xor.encode,
    decodeUrl: prx.codec.xor.decode,
    handler: '/prx.handler.js',
    bundle: '/prx.bundle.js',
    config: '/prx.config.js',
    sw: '/prx.sw.js',
};

// will be replaced to our own bare later, just our current vps got sinkholed
