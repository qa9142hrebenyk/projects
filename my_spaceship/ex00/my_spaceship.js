function my_spaceship(instruction){
    var x = 0;
    var y = 0;
    var direction = 'up';
        for(i=0; i<instruction.length; i++){
            if(instruction[i] == 'A'){
                if(direction == 'up'){
                    y --;
                }
                else if(direction == 'down'){
                    y ++;
                }
                else if(direction =='right'){
                    x ++;
                }
                else if(direction =='left'){
                    x --;
                }
                
                
            }
            if(instruction[i] == 'R'){
                if(direction == 'up'){
                    direction = 'right';
                }
                else if(direction == 'right'){
                    direction = 'down';
                }
                else if(direction == 'down'){
                    direction = 'left';
                }
                else if(direction == 'left'){
                    direction = 'up';
                }
            }
            if(instruction[i] == 'L'){
                if(direction == 'up'){
                    direction = 'left';
                    }
                else if(direction == 'left'){
                    direction = 'down';
                    }
                else if(direction == 'down'){
                    direction = 'right';
                    }
                else if(direction == 'right'){
                    direction = 'up';
                    }

            }
    }
    return `{x: ${x}, y: ${y}, direction: '${direction}'}`;
}