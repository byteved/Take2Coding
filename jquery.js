var frame = $('#frame')
var ht = $('#ht').val();
var cs = $('#cs').val();
var js = $('#js').val();
var str = frame[0].innerHTML;
str = str.replace('~ht', ht);
str = str.replace('~cs', cs);
str = str.replace('~js', '<script>'+js+'<\/script>');

frame.attr('srcdoc', str);
