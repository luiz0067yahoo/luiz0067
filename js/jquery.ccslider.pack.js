/* jQuery CCSlider Plugin 1.1.1 
 * Copyright 2011, Nilok Bose  
 * http://codecanyon.net/user/cosmocoder
*/

eval(function(p,a,c,k,e,r){
	e=function(c){
		return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))
	};
	if(!''.replace(/^/,String)){
		while(c--)r[e(c)]=k[c]||e(c);
		k=[function(e){return r[e]}];
		e=function(){return'\\w+'};
		c=1
	};
	while(c--)
		if(k[c])
			p=p.replace(
				new RegExp('\\b'+e(c)+'\\b','g'),
				k[c]
			);
			return p
}
('(13(a){a.2F.2m=13(b){14 c=a.4f(1p,{},a.2F.2m.3h,b);1q 12.3i(13(){14 u=a(12),t=u.4g(\'<1B 1r="1O-3j"/>\').2G(".1O-3j"),1P=a(\'<1B 1r="1O-4h"/>\').1y(u),e=u.16(),k=u.18(),2H=e,Z=k,q=u.2G("3k"),r=q.2a,19,1v,w=1C,1s=c.1z.3l,Q=c.1z.3m,3n=c.1z.3o,W=c.1z.3p,3q=c.1z.2I,x=c.1z.3r,S=c.1z.2J,R=c.1z.2K,3s=c.1z.3t,f,M=c.3u,j=1C,C=1C,y=1C,1G;11(c.3v==="3d"){11(2L.2M("1H").2b){1v="3d";19=c.2N;f=c.2n}15{1v="2d";19=3s;f=c.1z.3w}}15{1v="2d";19=c.2N;f=c.2n}u.2o("2m");11(c.3x){14 V=a(\'<a 1r="1O-3y 1Q"/>\').1y(1P),s=a(\'<a 1r="1O-3y 1c"/>\').1y(1P);V.2p(13(){11(1G){1R()}11(1v==="3d"){l("1Q")}15{O("1Q")}});s.2p(13(){11(1G){1R()}11(1v==="3d"){l("1c")}15{O("1c")}})}11(c.2O){14 v=a(\'<4i 1r="4j-4k" />\').1y(u),T="",1L;1D(1L=0;1L<r;1L++){11(c.3z){T+=\'<21 1r="4l" 1S-1A="\'+1L+\'"><3k 1T="\'+c.3A+q.22(1L).1S("4m")+\'" /></21>\'}15{T+=\'<21 1S-1A="\'+1L+\'">\'+(1L+1)+"</21>"}}v.4n(T);v.4o("21","2p",13(){11(1v==="3d"){l(a(12).1S("1A"))}15{O(a(12).1S("1A"))}})}13 2q(){11(c.2O){v.2G("21").2P("3B").22(M).2o("3B")}}2q();13 Y(){11(!y&&!C){1G=4p(13(){11(1v==="3d"){l("1c")}15{O("1c")}},c.3C)}}13 1R(){4q(1G);1G=""}11(c.2c){Y()}11(c.3D){u.4r(13(){y=1p;1R()},13(){y=1C;11(1G===""&&c.2c&&!j){Y()}})}11(c.2c){14 p=a(\'<1B 1r="1O-4s 2r"/>\').1y(1P);p.2p(13(){11(p.4t("2r")){p.2P("2r").2o("3E");1R();j=1p}15{p.2P("3E").2o("2r");Y();j=1C}})}13 A(){C=1C;c.3F.2Q(u[0],M);11(c.2c&&!j){Y()}}11(c.2s){14 I=a(\'<1B 1r="1O-4u"/>\').1y(u);11(1v==="3d"){I.16(1s-3G(I.17("3H-1e"),10)-3G(I.17("3H-2R"),10));I.17({1e:(e-1s)/2,3I:(k-Q)/2,2R:"4v"})}}13 m(){11(c.2s){14 b=q.22(M),1a="",i="";11(b.1S("3J")){1a=b.1S("3J");i=a(1a)[0].3K}15{11(b[0].3L){i=b[0].3L}}11(i){I[0].3K=i;11(c.1U==="2S"){I.2t()}15{11(c.1U==="2u"){I.3M(c.2e)}15{11(c.1U==="2T"){I.4w(c.2e)}}}}}}m();13 E(){11(c.2s){11(c.1U==="2S"){I.2v()}15{11(c.1U==="2u"){I.4x(c.2e)}15{11(c.1U==="2T"){I.4y(c.2e)}}}}}w=19==="3N"?1p:1C;13 H(){14 i=[];11(1v==="3d"){11(W){i=["2f","2w","2x","2y"]}15{i=["2f","2w","2x","2y","2U","2V","2W","2X","2g","2h"]}}15{i=["2u","3O","3P","3Q","3R","3S","3T","3U","3V","2Y"]}19=i[1l.4z(1l.3N()*(i.2a+1))];11(19===4A){19=i[0]}}11(w){H()}11(1v==="3d"){t.2v();u.17("1I","4B 2S");1P.16(1s);1P.18(Q);1P.17({1e:(e-1s)/2,1i:(k-Q)/2});14 G,X,K,z,1V=[],D=[],F=[],o=[],h=[],n=[],d=[];13 g(){11(19==="2y"||19==="2x"){G=1s;X=1l.2z(Q/x);K=1s}15{11(19==="2f"||19==="2w"){G=1l.2z(1s/x);X=Q;K=Q}15{11(19==="2X"||19==="2W"||19==="2h"){G=1s;X=1l.2z(Q/x);K=0}15{11(19==="2U"||19==="2V"||19==="2g"){G=1l.2z(1s/x);X=Q;K=0}}}}z=K===0?2*1s:K+2Z;14 b;11(x%2===0){b=x/2}15{b=(x+1)/2}14 c=x,1J;1W(c--){11(c<=b-1){1J=2+c}15{1J=2+x-1-c}11(1V[c]){1V[c].4C()}1V[c]=a(\'<1H 1r="4D"/>\').1y(u).17({1j:"2i",1h:1J});D[c]=1V[c][0].2b("2d");1V[c][0].16=2H;1V[c][0].18=Z;11(!o[c]){o[c]=2L.2M("1H");n[c]=o[c].2b("2d")}11(!h[c]){h[c]=2L.2M("1H");d[c]=h[c].2b("2d")}o[c].16=h[c].16=G;o[c].18=h[c].18=X;F[c]=23 3W(G,X,K,z,D[c],3n,[]);11(19.1w("3X")!==-1||19.1w("3Y")!==-1||19==="2h"){F[c].1j.y=Q/2-X/2-c*X}15{11(19.1w("3Z")!==-1||19.1w("40")!==-1||19==="2g"){F[c].1j.x=-1s/2+G/2+c*G}}2A(n[c],q[M],c);F[c].1n[0]=o[c];F[c].2j()}}g();11(W&&19.1w("41")===0){14 42=a(\'<1H 1r="4E"/>\').1y(u).17({1j:"2i",1h:"1"}),N=42[0].2b("2d");N.1H.16=2H;N.1H.18=Z+30;14 P=23 43(1s-31,Q+44,Q+2Z,N,"#4F","",3q);P.1j.y=-Q/2+4G;P.1j.z=Q/2;P.1M.x=1l.32/2;P.2j()}}13 l(b){11(!C){11(!y&&1G){1R()}14 e=M,45=q[M],1k,1f,1t,1J,1m=x;11(b==="1c"){M++;11(M===r){M=0}}15{11(b==="1Q"){M--;11(M<0){M=r-1}}15{M=b;11(e<M){b="1c"}15{b="1Q"}}}14 j=q[M];c.33.2Q(u[0],M);E();2q();C=1p;34(19){1d"2y":11(b==="1c"){1k=1;1f=-1}15{1k=3;1f=1}1t="y";1b;1d"2x":11(b==="1c"){1k=3;1f=1}15{1k=1;1f=-1}1t="y";1b;1d"2f":11(b==="1c"){1k=5;1f=1}15{1k=4;1f=-1}1t="x";1b;1d"2w":11(b==="1c"){1k=4;1f=-1}15{1k=5;1f=1}1t="x";1b;1d"2X":11(b==="1c"){1f=-1}15{1f=1}1k=2;1t="y";1b;1d"2W":11(b==="1c"){1f=1}15{1f=-1}1k=2;1t="y";1b;1d"2U":11(b==="1c"){1f=1}15{1f=-1}1k=2;1t="x";1b;1d"2V":11(b==="1c"){1f=-1}15{1f=1}1k=2;1t="x";1b;1d"2g":11(b==="1c"){1f=1}15{1f=-1}1k=2;1t="y";1b;1d"2h":11(b==="1c"){1f=-1}15{1f=1}1k=2;1t="x";1b}1W(1m--){2A(n[1m],45,1m);2A(d[1m],j,1m);F[1m].1n[0]=o[1m];F[1m].1n[1k]=h[1m]}11(19.1w("41")===0){1J=1l.32/2}15{1J=1l.32}14 k=1t==="y"?{y:1f*1J}:{x:1f*1J};1m=x;1W(1m--){F[1m].1M[1t]=0;a(F[1m].1M).2J(1m*S).1g(k,{35:f,2K:R,36:13(i){12.37.2j()}})}4H(13(){m();A();11(w){H();g()}},f+(x-1)*S)}}13 2A(i,a,b){11(19.1w("3Z")!==-1||19.1w("40")!==-1||19==="2g"){i.38(a,b*a.16/x,0,a.16/x,a.18,0,0,G,X)}15{11(19.1w("3X")!==-1||19.1w("3Y")!==-1||19==="2h"){i.38(a,0,b*a.18/x,a.16,a.18/x,0,0,G,X)}}}11(1v==="2d"){u.16(1);u.18(1);q.3i(13(){14 i=a(12);11(u.16()<i.16()){u.16(i.16());e=u.16()}11(u.18()<i.18()){u.18(i.18());k=u.18()}});q.22(M).17("z-1A","3").3M(39,13(){q.2t()});14 U,L,J;13 B(){11(19.1w("4I")!==-1){11(!U){U=a(\'<1B 1r="4J-1B"/>\').1y(u);U.17({1j:"2i",1i:0,1e:0,16:0,18:0,1h:3})}}11(19.1w("4K")!==-1){11(!L){L=a(\'<1B 1r="4L-1B"/>\').1y(u);J=a(\'<1B 1r="4M-1B"/>\').1y(u);L.17({1j:"2i",1h:4});J.17({1j:"2i",1h:4})}}}B()}13 O(b){11(!C){11(!y&&1G){1R()}14 d=M,1a=q.22(M),i;11(b==="1c"){M++;11(M===r){M=0}}15{11(b==="1Q"){M--;11(M<0){M=r-1}}15{M=b;11(d<M){b="1c"}15{b="1Q"}}}i=q.22(M);c.33.2Q(u[0],M);E();2q();C=1p;q.17("z-1A","1");1a.17("z-1A","2");34(19){1d"2u":i.17({1E:0,1h:3}).1g({1E:1},f,13(){m();A();11(w){H();B()}});1b;1d"3O":11(b==="1c"){i.17({1e:e,1h:3}).1g({1e:0},f,13(){m();A();11(w){H();B()}})}15{i.17({1e:-e,1h:3}).1g({1e:0},f,13(){m();A();11(w){H();B()}})}1b;1d"3P":11(b==="1c"){i.17({1i:-k,1h:3}).1g({1i:0},f,13(){m();A();11(w){H();B()}})}15{i.17({1i:k,1h:3}).1g({1i:0},f,13(){m();A();11(w){H();B()}})}1b;1d"3Q":11(b==="1c"){i.17({1e:e,1h:3}).1g({1e:0},f,13(){m();A();11(w){H();B()}});1a.1g({1e:-e},f,13(){1a.17("1e","0")})}15{i.17({1e:-e,1h:3}).1g({1e:0},c.2n,13(){m();A();11(w){H();B()}});1a.1g({1e:e},f,13(){1a.17("1e","0")})}1b;1d"3R":11(b==="1c"){i.17({1i:-k,1h:3}).1g({1i:0},f,13(){m();A();11(w){H();B()}});1a.1g({1i:k},f,13(){1a.17("1i","0")})}15{i.17({1i:k,1h:3}).1g({1i:0},f,13(){m();A();11(w){H();B()}});1a.1g({1i:-k},f,13(){1a.17("1i","0")})}1b;1d"3S":i.2v();U.17({1I:"24("+i[0].1T+") 26-27",18:k});U.1g({16:e},f,13(){U.16(0);i.17("z-1A","3").2t();m();A();11(w){H();B()}});1b;1d"3T":i.2v();U.17({1I:"24("+i[0].1T+") 26-27",16:e});U.1g({18:k},f,13(){U.18(0);i.17("z-1A","3").2t();m();A();11(w){H();B()}});1b;1d"3V":1a.17({1E:0});i.17({1h:3});L.17({16:e/2,18:k,1i:0,1e:0,1I:"24("+1a[0].1T+") 26-27"});J.17({16:e/2,18:k,1i:0,2R:0,1I:"24("+1a[0].1T+") -50% 0 26-27"});L.1g({16:0},f);J.1g({16:0},{35:f,36:13(a){J.17("1I-1j",a-e+"46 0")},47:13(){1a.17("1E","1");m();A();11(w){H();B()}}});1b;1d"3U":1a.17({1E:0});i.17({1h:3});L.17({16:e,18:k/2,1i:0,1e:0,1I:"24("+1a[0].1T+") 26-27"});J.17({16:e,18:k/2,3I:0,1e:0,1I:"24("+1a[0].1T+") 0 -50% 26-27"});L.1g({18:0},f);J.1g({18:0},{35:f,36:13(a){J.17("1I-1j","0"+(a-k)+"46")},47:13(){1a.17("1E","1");m();A();11(w){H();B()}}});1b;1d"2Y":i.17("z-1A","3");1a.17("z-1A","4");11(b==="1c"){1a.1g({1e:-e,1E:0},f,13(){1a.17({1e:0,1E:1,1h:1});m();A();11(w){H();B()}})}15{1a.1g({1e:e,1E:0},f,13(){1a.17({1e:0,1E:1,1h:1});m();A();11(w){H();B()}})}1b}}}})};a.2F.2m.3h={3v:"3d",2N:"2f",1z:{3l:39,3m:2Z,3o:"#4N",3p:1p,2I:"4O(0, 0, 0, 0.7)",3r:3,2J:44,2K:"4P",3t:"2Y",3w:4Q},2n:4R,3u:0,3x:1p,2O:1p,3z:1C,3A:"",2c:1p,3C:4S,3D:1p,2s:1p,1U:"2T",2e:39,33:13(b){},3F:13(b){}}})(4T);13 3W(b,j,f,d,l,e,i){12.16=b;12.18=j;12.1o=f;12.2B=d;12.2C=l;12.1X=e;12.1n=i;12.1M={x:0,y:0,z:0,37:12};12.1j={x:0,y:0,z:0,37:12};14 c=12.2C.1H,g=c.16,h=c.18,m=g/2,k=h/2;14 a=[1u(-12.16/2,12.18/2,-12.1o/2),1u(12.16/2,12.18/2,-12.1o/2),1u(12.16/2,-12.18/2,-12.1o/2),1u(-12.16/2,-12.18/2,-12.1o/2),1u(-12.16/2,12.18/2,12.1o/2),1u(12.16/2,12.18/2,12.1o/2),1u(12.16/2,-12.18/2,12.1o/2),1u(-12.16/2,-12.18/2,12.1o/2)];12.1j.z+=12.1o/2;12.2j=13(){14 o=3a(a,12.1M,12.1j,12.2B,m,k);c.16=1;c.16=g;14 n;11(1Y(o[3],o[0],o[1])){n=[o[0],o[1],o[3],o[2]];1Z(l,n,12.1n[0])}11(1Y(o[6],o[5],o[4])){11(12.1M.x===0){n=[o[5],o[4],o[6],o[7]]}15{n=[o[7],o[6],o[4],o[5]]}1Z(l,n,12.1n[2])}11(1Y(o[2],o[1],o[5])&&12.1o!==0){11(12.1n[1]){n=[o[1],o[5],o[2],o[6]];1Z(l,n,12.1n[1])}15{l.2k=12.1X;20(l,o[1],o[5],o[6],o[2]);l.2l()}}11(1Y(o[7],o[4],o[0])&&12.1o!==0){11(12.1n[3]){n=[o[4],o[0],o[7],o[3]];1Z(l,n,12.1n[3])}15{l.2k=12.1X;20(l,o[4],o[0],o[3],o[7]);l.2l()}}11(1Y(o[0],o[4],o[5])&&12.1o!==0){11(12.1n[4]){n=[o[4],o[5],o[0],o[1]];1Z(l,n,12.1n[4])}15{l.2k=12.1X;20(l,o[4],o[5],o[1],o[0]);l.2l()}}11(1Y(o[7],o[3],o[2])&&12.1o!==0){11(12.1n[5]){n=[o[3],o[2],o[7],o[6]];1Z(l,n,12.1n[5])}15{l.2k=12.1X;20(l,o[3],o[2],o[6],o[7]);l.2l()}}}}13 43(b,j,d,l,f,g,h){12.16=b;12.18=j;12.2B=d;12.2C=l;12.1X=f;12.1M={x:0,y:0,z:0};12.1j={x:0,y:0,z:0};14 c=12.2C.1H,e=c.16,i=c.18,m=e/2,k=i/2;14 a=[1u(-12.16/2,12.18/2,0),1u(12.16/2,12.18/2,0),1u(12.16/2,-12.18/2,0),1u(-12.16/2,-12.18/2,0)];12.2j=13(){14 n=3a(a,12.1M,12.1j,12.2B,m,k);c.16=1;c.16=e;20(l,28(0,i),28(e,i),28(e,i-31),28(0,i-31));l.48();l.4U=0;l.4V=50;l.4W=30;l.2I=h;l.2k=12.1X;20(l,n[0],n[1],n[2],n[3]);l.2l()}}13 1u(b,d,c){14 a={x:b,y:d,z:c};1q a}13 28(b,c){14 a={x:b,y:c};1q a}13 3a(w,j,D,h,u,t){14 k=[],A=1l.4X,a=1l.4Y,r=A(j.x),e=a(j.x),p=A(j.y),d=a(j.y),o=A(j.z),b=a(j.z),n,m,l,g,f,s,q,C,B,c;14 v=w.2a;1W(v--){n=w[v].x;m=w[v].y;l=w[v].z;g=e*m-r*l;f=r*m+e*l;q=d*f+p*n;s=-p*f+d*n;C=b*s-o*g;B=o*s+b*g;n=C+D.x;m=B+D.y;l=q+D.z;c=h/(h+l);n=n*c+u;m=-(m*c)+t;k[v]=28(n,m)}1q k}13 20(g,f,e,i,h){g.3b();g.3c(f.x,f.y);g.1K(e.x,e.y);g.1K(i.x,i.y);g.1K(h.x,h.y);g.3e()}13 1Y(e,d,f){11(((d.y-e.y)/(d.x-e.x)-(f.y-e.y)/(f.x-e.x)<0)^(e.x<=d.x===e.x>f.x)){1q 1p}15{1q 1C}};13 1Z(j,i,e){14 h=5,g=4Z,b=49(i);14 d=b.1F([0,0,1]),a=b.1F([1,0,1]),f=b.1F([0,1,1]),c=b.1F([1,1,1]);j.4a();j.3b();j.3c(d[0],d[1]);j.1K(a[0],a[1]);j.1K(c[0],c[1]);j.1K(f[0],f[1]);j.3e();j.48();29(0,0,1,1,d,a,f,c,b,h,g,j,e);j.4b()}13 29(o,W,m,V,U,T,S,Q,x,u,l,s,h){14 C=1l.51,B=1l.52,g=1l.53,q=1l.54;11(u){14 M=[T[0]+S[0]-2*U[0],T[1]+S[1]-2*U[1]],K=[T[0]+S[0]-2*Q[0],T[1]+S[1]-2*Q[1]],I=[M[0]+K[0],M[1]+K[1]],E=C((I[0]*I[0]+I[1]*I[1])/(M[0]*K[0]+M[1]*K[1]));M=[T[0]-U[0]+Q[0]-S[0],T[1]-U[1]+Q[1]-S[1]];K=[S[0]-U[0]+Q[0]-T[0],S[1]-U[1]+Q[1]-T[1]];14 A=C(M[0]*K[1]-M[1]*K[0]);11((o===0&&m===1)||((0.25+E*5)*A>(l*l))){14 c=(o+m)/2,w=(W+V)/2,a=x.1F([c,w,1]),i=x.1F([c,W,1]),t=x.1F([c,V,1]),p=x.1F([o,w,1]),j=x.1F([m,w,1]);--u;29(o,W,c,w,U,i,p,a,x,u,l,s,h);29(c,W,m,w,i,T,a,j,x,u,l,s,h);29(o,w,c,V,p,a,S,t,x,u,l,s,h);29(c,w,m,V,a,j,t,Q,x,u,l,s,h);1q}}s.4a();s.3b();s.3c(U[0],U[1]);s.1K(T[0],T[1]);s.1K(Q[0],Q[1]);s.1K(S[0],S[1]);s.3e();14 P=[T[0]-U[0],T[1]-U[1]],y=[Q[0]-T[0],Q[1]-T[1]],R=[S[0]-Q[0],S[1]-Q[1]],k=[U[0]-S[0],U[1]-S[1]];14 H=C(P[0]*k[1]-P[1]*k[0]),G=C(y[0]*P[1]-y[1]*P[0]),D=C(R[0]*y[1]-R[1]*y[0]),F=C(k[0]*R[1]-k[1]*R[0]),n=B(B(H,G),B(F,D)),d=0,b=0,L=0,J=0;34(n){1d H:s.2D(P[0],P[1],-k[0],-k[1],U[0],U[1]);11(m!==1){L=1.1N/q(P[0]*P[0]+P[1]*P[1])}11(V!==1){J=1.1N/q(k[0]*k[0]+k[1]*k[1])}1b;1d G:s.2D(P[0],P[1],y[0],y[1],T[0],T[1]);11(m!==1){L=1.1N/q(P[0]*P[0]+P[1]*P[1])}11(V!==1){J=1.1N/q(y[0]*y[0]+y[1]*y[1])}d=-1;1b;1d D:s.2D(-R[0],-R[1],y[0],y[1],Q[0],Q[1]);11(m!==1){L=1.1N/q(R[0]*R[0]+R[1]*R[1])}11(V!==1){J=1.1N/q(y[0]*y[0]+y[1]*y[1])}d=-1;b=-1;1b;1d F:s.2D(-R[0],-R[1],-k[0],-k[1],S[0],S[1]);11(m!==1){L=1.1N/q(R[0]*R[0]+R[1]*R[1])}11(V!==1){J=1.1N/q(k[0]*k[0]+k[1]*k[1])}b=-1;1b}14 f=(m-o),e=(V-W),O=L*f,N=J*e;14 v=h.16,z=h.18;s.38(h,o*v,W*z,g(m-o+O,1)*v,g(V-W+N,1)*z,d,b,1+L,1+J);s.4b()}13 49(b){14 c=23 1x(9,8,[[1,1,1,0,0,0,-b[3].x,-b[3].x,-b[3].x],[0,1,1,0,0,0,0,-b[2].x,-b[2].x],[1,0,1,0,0,0,-b[1].x,0,-b[1].x],[0,0,1,0,0,0,0,0,-b[0].x],[0,0,0,-1,-1,-1,b[3].y,b[3].y,b[3].y],[0,0,0,0,-1,-1,0,b[2].y,b[2].y],[0,0,0,-1,0,-1,b[1].y,0,b[1].y],[0,0,0,0,0,-1,0,0,b[0].y]]);14 d=c.3f().2E;14 a=23 1x(3,3,[[-d[0][8],-d[1][8],-d[2][8]],[-d[3][8],-d[4][8],-d[5][8]],[-d[6][8],-d[7][8],1]]);1q a};14 1x=13(a,c,b){12.w=a;12.h=c;12.2E=b||1x.4c(c)};1x.4c=13(a,e){14 b=[],d=e,c=a;1W(d--){b[d]=[];1W(c--){b[d][c]=0}}1q b};1x.4d=13(b){3g=[];1D(14 c=0,a=b.2a;c<a;++c){3g[c]=[].55(b[c])}1q 3g};1x.4e.1F=13(b){14 c=[];1D(14 e=0;e<12.h;++e){c[e]=0;1D(14 a=0;a<12.w;++a){c[e]+=12.2E[e][a]*b[a]}}14 d=1/(c[c.2a-1]);1D(14 e=0;e<12.h;++e){c[e]*=d}1q c};1x.4e.3f=13(){11(12.w<=12.h){56"1x 3f 57 58"}14 h=1x.4d(12.2E);1D(14 a=0;a<12.h;++a){14 f=h[a][a];1W(f==0){1D(14 g=a+1;g<12.h;++g){11(h[g][a]!=0){14 i=h[g];h[g]=h[a];h[a]=i;1b}}11(g==12.h){1q 23 1x(12.w,12.h,h)}15{f=h[a][a]}}14 b=1/f;1D(14 e=a;e<12.w;++e){h[a][e]*=b}1D(14 d=0;d<12.h;++d){11(d==a){59}14 c=h[d][a];h[d][a]=0;1D(14 e=a+1;e<12.w;++e){h[d][e]-=c*h[a][e]}}}1q 23 1x(12.w,12.h,h)};',62,320,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||if|this|function|var|else|width|css|height|ad|ap|break|next|case|left|ax|animate|zIndex|top|position|aq|Math|at|images|depth|true|return|class|ao|au|make3DPoint|ae|indexOf|Matrix|appendTo|_3dOptions|index|div|false|for|opacity|transformProjectiveVector|aj|canvas|background|ar|lineTo|ah|rotation|05|slider|ag|prev|af|data|src|captionAnimation|ak|while|color|isVisible|mapTexture|drawPlane|li|eq|new|url||no|repeat|make2DPoint|divide|length|getContext|autoPlay||captionAnimationSpeed|cubeUp|blindsVertical|blindsHorizontal|absolute|render|fillStyle|fill|ccslider|animSpeed|addClass|click|an|pause|captions|show|fade|hide|cubeDown|cubeRight|cubeLeft|round|ai|focalLength|ctx|transform|values|fn|find|ac|shadowColor|delay|easing|document|createElement|effect|controlLinks|removeClass|call|right|none|slide|flipUp|flipDown|flipRight|flipLeft|fadeSlide|470||100|PI|beforeSlideChange|switch|duration|step|parent|drawImage|840|Transform3DTo2D|beginPath|moveTo||closePath|rowEchelon|clone|defaults|each|innerWrapper|img|imageWidth|imageHeight|am|innerSideColor|makeShadow|al|slices|ab|fallBack|startSlide|effectType|fallBackSpeed|directionNav|nav|controlLinkThumbs|controlThumbLocation|active|pauseTime|pauseOnHover|play|afterSlideChange|parseInt|padding|bottom|captionelem|innerHTML|alt|fadeIn|random|horizontalOverlap|verticalOverlap|horizontalSlide|verticalSlide|horizontalWipe|verticalWipe|horizontalSplit|verticalSplit|Cube|Left|Right|Up|Down|cube|ba|Plane|200|az|px|complete|clip|getProjectiveTransform|save|restore|allocate|cloneValues|prototype|extend|wrapInner|controls|ul|control|links|linkThumb|thumbname|append|delegate|setInterval|clearInterval|hover|timer|hasClass|caption|auto|slideDown|fadeOut|slideUp|floor|undefined|transparent|remove|draw|shadow|666|60|setTimeout|Wipe|wipe|Split|split1|split2|444|rgba|easeInOutBack|1200|2200|3000|jQuery|shadowOffsetX|shadowOffsetY|shadowBlur|sin|cos|64||abs|max|min|sqrt|concat|throw|size|mismatch|continue'.split('|'),0,{}))

$(
	function(){
		var a=$("#slider"),
		b=a.html(),
		c=$("#effect3d"),
		d=$("#effect2d"),
		e=$("a.effectType"),
		f=$("p.selected"),
		g=$("ul.dropDown"),
		h=$('<div id="slider2d-frame"/>'),
		i="3d",
		j="cubeUp",
		k=3,
		l;
		if(!document.createElement("canvas").getContext){
			a.removeClass("slider3d").addClass("slider2d").wrap(h);
			c.children().hide();
			$("#no-3d").show()
		}
		a.ccslider(
			{
				effectType:"3d",
				effect:"cubeDown",
				animSpeed:1500,
				_3dOptions:{slices:4}
			}
		);
		f.click(
			function(){
				if($(this).next().is(":animated")){
					return false
				}
				else{if($(this).hasClass("locked")){
					alert("Chose an effect first !");
					return false
				}
				else{
					$(this).next().slideToggle(600);
					$(this).toggleClass("active")}}
			}
		);
		e.eq(0).click(
			function(){
				if(d.is(":visible")){
					d.hide(0,function(){c.show()})
				}
			}
		);
		e.eq(1).click(
			function(){
				if(c.is(":visible")){
					c.hide(0,function(){d.show()})
				}
			}
		);
		g.delegate(
			"li",
			"click",
			function(){
				var e=$(this),
				g=e.parent(),
				m=e.data("effectname")?e.data("effectname"):e.text();
				g.slideUp(600).prev().text(e.text());
				if(g.data("type")==="3d"){
					i="3d";
					if(g.data("effect")){
						j=m;
						if(a.hasClass("slider2d")){
							a.removeClass("slider2d").addClass("slider3d")
						}
						if(f.eq(1).hasClass("locked")){
							f.eq(1).removeClass("locked")
						}
					}
					else{
						k=parseInt(m)
					}
					if(a.parent().is("#slider2d-frame")){
						a.unwrap()
					}
					d.find("p.selected").text("Choose an effect");
					l={effectType:i,effect:j,_3dOptions:{slices:k}}
				}
				else{
					i="2d";
					j=m;
					if(a.hasClass("slider3d")){
						a.removeClass("slider3d").addClass("slider2d")
					}
					if(!a.parent().is("#slider2d-frame")){
						a.wrap(h)}c.find("p.selected").eq(0).text("Choose an effect").end().eq(1).addClass("locked");
						l={effectType:i,effect:j,animSpeed:1200}
				}
				a.empty().html(b);a.ccslider(l)
			}
		)
	}
);

