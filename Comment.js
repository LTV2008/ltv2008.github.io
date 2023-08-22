// Name: Comment Hat Block
// ID: lccomments
// Description: Annotate with a hat block.
// Orginal by : LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/>
// Forked by : LTV2008 <https://scratch.mit.edu/users/LTV2008/>

(function (Scratch) {
  'use strict';
  class CommentBlock {
    getInfo() {
      return {
        id: 'lccomments',
        name: 'Comment Hat Block',
        color1: '#94ce00',
        color2: '#648c00',
        color3: '#aaed00',
          blocks: [
          {
            opcode: 'commentHat',
            blockType: Scratch.BlockType.HAT,
            text: 'Comment [COMMENT]',
            isEdgeActivated: false,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              }
            }
          },
        ]
      };
    }
    commentHat () {
      // no-op
    }
  }
  Scratch.extensions.register(new CommentBlock());
})(Scratch);