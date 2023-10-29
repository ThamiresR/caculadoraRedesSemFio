let buttonShannon = document.getElementById('btn-shannon');
buttonShannon.addEventListener('click', () => {
    const banda = parseInt(document.getElementById('banda').value);
    const sn = parseInt(document.getElementById('sn').value);
    const result = document.getElementById('output');

    if(banda && sn){
        const sn_valor = 10**(sn/10)
        const calculo = (banda*(Math.log2(1+sn_valor)));
        result.innerHTML = 'Resposta: ' +(calculo.toFixed(2)) + ' bps';
       
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});

let buttonNyquist = document.getElementById('btn-nyquist');
buttonNyquist.addEventListener('click', () => {
    const banda = parseInt(document.getElementById('bandaN').value);
    const modulacao = parseInt(document.getElementById('modulacao').value);
    const result = document.getElementById('outputN');

    if(banda && modulacao){
        const calculo = (2*banda*modulacao);
        result.innerHTML ='Resposta: ' +(calculo.toFixed(2)) + ' bps';
       
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});

let buttonconv1 = document.getElementById('btn-conv1');
buttonconv1.addEventListener('click', () => {
    const mw = parseFloat(document.getElementById('mw').value);
    const result = document.getElementById('outputmw');

    if(mw){
        const calculo = (10*(Math.log10(mw)));
        result.innerHTML ='Resposta: ' +(calculo.toFixed(2)) + ' dBm';
       
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});

let buttonconv2 = document.getElementById('btn-conv2');
buttonconv2.addEventListener('click', () => {
    const dbm = parseFloat(document.getElementById('dbm').value);
    const result = document.getElementById('outputdbm');

    if(dbm){
        const calculo = (10**(dbm/10));
        result.innerHTML ='Resposta: ' +Math.round(calculo) + ' mW';
       
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});

let buttoneirp = document.getElementById('btn-eirp');
buttoneirp.addEventListener('click', () => {
    const transmissao = parseFloat(document.getElementById('transmissao').value);
    const ganho = parseFloat(document.getElementById('ganho').value);
    const perdas = parseFloat(document.getElementById('perdas').value);
    const result = document.getElementById('outputeirp');

    if(transmissao && ganho && perdas){
        const calculo = (transmissao+ganho-perdas);
        result.innerHTML = ('Resposta: ' +(calculo).toFixed(2) + ' dBm');
       
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});

let buttonfslp = document.getElementById('btn-fslp');
buttonfslp.addEventListener('click', () => {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const frequencia = parseFloat(document.getElementById('frequencia').value);
    const result = document.getElementById('outputfslp');

    if(distancia && frequencia){
        const calculo = (32.4 + 20*Math.log10(distancia) + 20*Math.log10(frequencia));
        result.innerHTML = ('Resposta: ' +(calculo).toFixed(2) + ' dB');
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});

let buttonrsl = document.getElementById('btn-rsl');
buttonrsl.addEventListener('click', () => {
    const transmissao = parseFloat(document.getElementById('ptransmissao').value);
    const ganhotx = parseFloat(document.getElementById('ganhotx').value);
    const perdatx = parseFloat(document.getElementById('perdatx').value);
    const fslp = parseFloat(document.getElementById('fslp').value);
    const ganhorx = parseFloat(document.getElementById('ganhorx').value);
    const perdarx = parseFloat(document.getElementById('perdarx').value);
    const result = document.getElementById('outputrsl');

    if(transmissao && ganhotx && perdatx && fslp && ganhorx && perdarx){
        const calculo = ((transmissao)+(ganhotx)-(perdatx)-(fslp)+(ganhorx)-(perdarx));
        result.innerHTML = ('Resposta: ' +calculo + ' dBm');    
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});

let buttonfresnel = document.getElementById('btn-fresnel');
buttonfresnel.addEventListener('click', () => {
    const DAO = parseFloat(document.getElementById('DAO').value);
    const D = parseFloat(document.getElementById('D').value);
    const F = parseFloat(document.getElementById('F').value);
    const result = document.getElementById('outputfresnel');
    const resultminimo = document.getElementById('outputfresnelminimo');
    const DBO = (D-DAO);


    if(DAO && DBO && F && D ){
        const calculo = ( 550 * (Math.sqrt(DAO * DBO / ( D * F ))));
        result.innerHTML = ('Resposta: ' +calculo.toFixed(2) + ' m');
        
        if(F<3000){
            resultminimo.innerHTML = ('Minimo: ' +(calculo*0.6).toFixed(2) + ' m');
        }else{
            resultminimo.innerHTML = ('O percentual minimo não se aplica');
        }
    }else{
        alert('Está faltando valores');
        result.innerHTML = '';
    }
});