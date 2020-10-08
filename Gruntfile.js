module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
			beforeUglify: {
				options: {
					separator: ';\n',
				},
				src: [
					'src/cryptojs.js',
					'src/cryptojs.sha256.js',
					'src/cryptojs.pbkdf2.js',
					'src/cryptojs.hmac.js',
					'src/cryptojs.aes.js' ,
					'src/cryptojs.blockmodes.js',
					'src/cryptojs.ripemd160.js',
					'src/securerandom.js',
					'src/ellipticcurve.js',
					'src/secrets.js',
					'src/biginteger.js', 
					'src/bitcoinjs-lib.js', 
					'src/bitcoinjs-lib.base58.js',
					'src/bitcoinjs-lib.address.js',
					'src/bitcoinjs-lib.ecdsa.js',
					'src/bitcoinjs-lib.eckey.js',
					'src/bitcoinjs-lib.util.js',
					'src/crypto-scrypt.js',
					'src/sashmaaan.vmerge.js',
				],
				dest: 'dist/sashmaaan.vmerge.js',
			},
			afterUglify: {
				options: {
					separator: ';\n',
				},
				src: [
					'dist/sashmaaan.vmerge.min.js', 
					'src/bitcoinjs-lib-4.0.2.min.js', 
				],
				dest: 'dist/sashmaaan.vmerge.min.js',
			}
		},

		uglify: {
			target: {
				files: {
					'./dist/sashmaaan.vmerge.min.js': ['./dist/sashmaaan.vmerge.js']
				}
			},
		},

	});

	grunt.file.defaultEncoding = 'utf-8';
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("default", ["concat:beforeUglify", "uglify", "concat:afterUglify"]);  // 
};
