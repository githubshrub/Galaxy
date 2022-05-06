self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/prx.handler.js',
    bundle: '/prx.bundle.js',
    config: '/prx.config.js',
    sw: '/prx.sw.js',
};
