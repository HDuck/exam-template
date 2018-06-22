module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
    clean: {
      release: {
        src: 'release/*'
      },

      docs: {
        src: 'docs/*'
      }
    },

    sass: {
      release: {
        options: {
          style: 'expanded'
        },

        files: {
          'src/css/style.css': 'src/sass/main.sass'
        }
      },

      src: {
        options: {
          style: 'expanded'
        },
        
        files: {
          'src/css/style.css': 'src/sass/main.sass'
        }  
      }
    },

    cssmin: {
      release: {
        files: {
          'release/css/style.min.css': 'src/css/style.min.css'
        }
      },

      src: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.css.map'],
          dest: 'src/css',
          ext: '.min.css'
        }]
      }
    },

    htmlmin: {
      release: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeAttributeQuotes: true
        },

        files: {
          'release/index.html': 'src/index.html'
        }
      }
    },

    imagemin: {
      jpg: {
        options: {
          optimizationLevel: 3
        },

        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['*.{jpg,jpeg}'],
          dest: 'release/img/',
          ext: '.jpg'
        }]
      },

      png: {
        options: {
          optimizationLevel: 3
        },

        files: [{
          expand: true,
          cwd: 'src/img/',
          src: '*.png',
          dest: 'release/img/'
        }]
      }
    },

    validation: {
      release: {
        options: {
          doctype: 'HTML5',
          charset: 'utf-8'
        },

        files: {
          src: 'release/index.html'
        }
      }
    },

    w3c_css_validation: {
      release: {
        src: ['release/css/*.min.css']
      }
    },

    copy: {
      svg2release: {
        expand: true,
        cwd: 'src/img',
        src: ['svg/*.svg', 'sprites/*.svg', '!svg/*/*.svg'],
        dest: 'release/img'
      },

      fonts2release: {
        expand: true,
        cwd: 'src/fonts',
        src: '*.ttf',
        dest: 'release/fonts'
      },

      docs: {
        expand: true,
        cwd: 'release',
        src: ['*.*', '**/*.*', '**/**/*.*'],
        dest: 'docs'
      }
    },

    watch: {
      sass: {
        files: ['src/sass/*.sass', 'src/sass/parts/*.sass', 'src/sass/parts/variables.scss'],
        tasks: ['sass:src', 'cssmin:src']
      }
    },

    svgstore: {
      default: {
        files: {
          'src/img/sprites/result.svg': ['src/img/sprites/svg_for_sprite/*.svg']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-w3c-html-validation');
  grunt.loadNpmTasks('grunt-w3c-css-validation');
  grunt.loadNpmTasks('grunt-svgstore');

  grunt.registerTask('build', ['clean', 'sass:release', 'cssmin:release', 'htmlmin', 'imagemin','validation', 'w3c_css_validation', 'copy']);
}