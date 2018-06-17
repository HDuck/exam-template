module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
/*    concat: {
      
      sass: {
        src: ['src/sass/parts/variables.sass', 'src/sass/parts/mixins.sass', 'src/sass/parts/header.sass', 'src/sass/parts/content.sass', 'src/sass/parts/footer.sass'],
        dest: 'src/sass/main.sass'
      },
      
      js: {
        src: ['src/js/parts/*.js'],
        dest: 'src/js/main.js'
      }
    },
    
    sass: {
      
      src: {
        
        options: {
          style: 'expanded'
        },
        
        files: {
          'src/css/style.css': 'src/sass/main.sass'
        }  
      },
      
      build: {
        
        options: {
          style: 'compressed'
        },
        
        files: {
          'build/css/style.min.css': 'src/sass/main.sass'
        }
      }
    },
    */
    validation: {
      
      html: {
        
        options: {
          doctype: 'HTML5',
          charset: 'utf-8'
        },
        
        files: {
          
          src: 'src/index.html'
        }
      }
    },
    
    clean: {
      
      build: {
        
        src: 'build'
      }      
    },
    
    sass: {
      
      src: {
        
        options: {
          style: 'expanded'
        },
        
        files: {
          'src/css/style.css': 'src/sass/main.sass'
        }  
      }
    },
    
    watch: {
      
      sass: {

        files: ['src/sass/*.sass', 'src/sass/parts/*.sass', 'src/sass/parts/variables.scss'],
        tasks: 'sass'
      }
    },

    svgstore: {
      options: {},

      default: {
        files: {
          'src/img/sprites/result.svg': ['src/img/sprites/svg_for_sprite/*.svg']
        }
      }

    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-w3c-html-validation');
  grunt.loadNpmTasks('grunt-svgstore');
}