
function my_levenshtein(s1,s2) {
    if (s1.length !== s2.length)
    return -1;
        let diff = 0;
        for (i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                diff++;
        }
    }
    return diff;

}