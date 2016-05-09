var N_U_L_L ="PROXY 180.97.33.108:80"
function FindProxyForURL(url,host){
	var domian = {var domain = ["ad.api.3g.youku.com", "valf.atm.youku.com","valp.atm.youku.com" ,"mf.atm.youku.com","statis.api.3g.youku.com","ad.api.3g.tudou.com","agn.aty.sohu.com","m.aty.sohu.com","mmg.aty.sohu.com","ark.letv.com","n.mark.letv.com" ,"x.da.hunantv.com" ,"bs.da.hunantv.com","log.da.hunantv.com","log.v2.hunantv.com","v2.log.hunantv.com","de.as.pptv.com","xs.houyi.baofeng.net" ,"pubads.g.doubleclick.net" ,"api.mobile.dianru.com"," iface iqiyi.com","admaster.com.cn","miaozhen.com","lives.1.qq.com","vqq.admaster.com.cn","irs01.com" ];
	for (var count = 0, len = domain.length; count  < len; count++){
	if (shExpMatch(host, domain[count]))
		{return N_U_L_L; }
	}
};