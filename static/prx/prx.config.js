self.__uv$config = {
    prefix: '/galaxy/',
    bare: '/bare/', // change this to your bare server if you want to use it
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/prx/prx.handler.js',
    bundle: '/prx/prx.bundle.js',
    config: '/prx/prx.config.js',
    sw: '/prx/prx.sw.js',
};