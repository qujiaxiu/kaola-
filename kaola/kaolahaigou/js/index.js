window.onload = function(){
	/*koubeione*/
	/*$(".koubeione .img").hover(function(){
		$(".touming").css("opacity","0.8");
	},function(){
		$(".touming").css("opacity","1");
	})*/
	/*滚动广告*/
	/*var timer = setInterval(gundong,10);
	var num = 0;
	//var bb = document.getElementsByClassName("b")
	function gundong(){
		if(num == 1200){
			num = 0;
		}
		$(".b").css("left", num-- +"px")
		
	}*/
	$(".koubeione").mouseenter(function(){
		$(".gundong").show();
	})
	$(".koubeione").mouseleave(function(){
		$(".gundong").hide();
	})
	/*二级菜单*/
	$(".baby2").hover(function(){
		$(this).show()
		$(".zicaidan").show();
	},function(){
		$(this).hide();
		$(".zicaidan").hide();
	})
	$(".baby").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>奶粉</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".baby").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".meirong").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>护肤</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".meirong").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".xiebao").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>精选大牌</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".xiebao").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".jiaju").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>洗护日用</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".jiaju").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".yingyangbaojian").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>营养补充</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".yingyangbaojian").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".haiwaizhiyou").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>配饰服饰</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".haiwaizhiyou").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".shumajiadian").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>手机/配件</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".shumajiadian").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".huanqiumeishi").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>乳品/咖啡/麦片/冲饮</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".huanqiumeishi").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".sport").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>运动鞋</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".sport").mouseleave(function(){
		$(".baby2").hide();
	})
	$(".fruit").mouseenter(function(){
		$(".baby2").show()
		$(".baby2").html(`
			
			<div class="zuoce">
			
			<div class="milk">
			<dl>
			    <dt>
			        <span>新鲜水果</span>
			    </dt>
			    <dd>
			        <a href="#" style="color:red;">爱他美</a><em>|</em>
			        <a href="#" style="color:red;">牛栏</a><em>|</em>
			        <a href="#" style="color:red;">a2</a><em>|</em>
			        <a href="#" style="color:red;">喜宝</a><em>|</em>
			        <a href="#" style="color:red;">贝拉米</a><br />
			        <a href="#" style="color:red;">Hero Baby</a><em>|</em>
			        <a href="#" style="color:red;">美素佳儿</a><em>|</em>
			        <a href="#">美林</a><em>|</em>
			        <a href="#">惠氏</a><br />
			        <a href="#" style="color:red;">雅培</a><em>|</em>
			        <a href="#">美赞臣</a><em>|</em>
			        <a href="#">雀巢</a><em>|</em>
			        <a href="#" style="color:red;">合生元</a><em>|</em>
			        <a href="#">满趣健</a><br />
			        <a href="#" style="color:red;">Pre段</a><em>|</em>
			        <a href="#" style="color:red;">1段</a><em>|</em>
			        <a href="#" style="color:red;">2段</a><em>|</em>
			        <a href="#">3段</a><em>|</em>
			        <a href="#">5段(2+)</a><br />
			        <a href="#">4段(1+)</a>
			    </dd>
			</dl>
			</div>
			
			<div class="milk" id="zhiniaoku">
				<dl>
					<dt>
					    <span>纸尿裤/拉拉裤</span>
				    </dt>
					<dd>
					    <a href="#" style="color:red;">花王</a><em>|</em>
					    <a href="#" style="color:red;">尤妮佳</a><em>|</em>
					    <a href="#" style="color:red;">大王</a><em>|</em>
					    <a href="#" style="color:red;">好奇</a><em>|</em>
					    <a href="#">妈咪宝贝</a><br />
					    <a href="#">帮宝适</a><em>|</em>
					    <a href="#">班博</a><em>|</em>
					    <a href="#">丽贝乐</a><em>|</em>
					    <a href="#">宝松怡</a><em>|</em>
					    <a href="#">NB号</a><br />
					    <a href="#">S号</a><em>|</em>
					    <a href="#">M号</a><em>|</em>
					    <a href="#">L号</a><em>|</em>
					    <a href="#">XL号</a><em>|</em>
					    <a href="#">XXL号</a>
				    </dd>
				</dl>
			</div>
			
			<div class="milk" id="yingyang">
			    <dl>
			        <dt>
			            <span>营养辅食</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">辅食泥</a><em>|</em>
			            <a href="#" style="color:red;">米粉米糊</a><em>|</em>
			            <a href="#" style="color:red;">泡芙</a><em>|</em>
			            <a href="#">溶溶豆</a><br />
			            <a href="#">营养品</a><em>|</em>
			            <a href="#">饼干</a><em>|</em>
			            <a href="#">肉松面仔</a><em>|</em>
			            <a href="#">调味品</a><br />
			            <a href="#">其他辅食</a><em>|</em>
			            <a href="#">其他零食</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="baobao">
			    <dl>
			        <dt>
			            <span>宝宝用品</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">洗漱护肤</a><em>|</em>
			            <a href="#" style="color:red;">护理</a><em>|</em>
			            <a href="#" style="color:red;">喂养</a><em>|</em>
			            <a href="#">出行</a><em>|</em>
			            <a href="#">清洁消毒</a><br />
			            <a href="#">文具图书</a><em>|</em>
			            <a href="#">积木</a><em>|</em>
			            <a href="#">益智玩具</a><em>|</em>
			            <a href="#">其他玩具</a><br />
			            <a href="#">宝宝家居</a><em>|</em>
			            <a href="#">小家电</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="tongxie">
			    <dl>
			        <dt>
			            <span>童装童鞋</span>
			        </dt>
			        <dd>
			            <a href="#" style="color:red;">童装</a><em>|</em>
			            <a href="#">儿童配饰</a><em>|</em>
			            <a href="#" style="color:red;">童鞋</a>
			        </dd>
			    </dl>
			</div>
			
			<div class="milk" id="yunma">
			    <dl>
			        <dt>
			            <span>孕妈必备</span>
			        </dt>
			    	<dd>
			            <a href="#" style="color:red;">营养</a><em>|</em>
			            <a href="#" style="color:red;">洗护</a><em>|</em>
			            <a href="#">待产新生</a><em>|</em>
			            <a href="#">穿戴</a><em>|</em>
			            <a href="#">塑身</a><br />
			        </dd>
			    </dl>
			</div>
			</div>
			
			<div class="youce">
			    <table class="youce2" cellspacing="0" cellpadding="0">
			        <tr>
			            <td>
			            	<a href="#">
			            		<img src="images/aptamil.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/ig1o83dv34_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/merries.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            <img src="images/ig1plpsc89_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iey2wlw933_120_120.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            <img src="images/iifru49i25_120_120.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			        <tr>
			            <td>
			            	<a href="#">
				            	<img src="images/ic736fqt39.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/xiaolinzhiyao.jpg" alt="" />
			            	</a>
			            </td>
			            <td>
			            	<a href="#">
				            	<img src="images/tomo.jpg" alt="" />
			            	</a>
			            </td>
			        </tr>
			    </table>
			    <div class="muyingpindao">
			        <a href="#">
			            <img src="images/muyingzhuanqu.jpg" alt="" />
			        </a>
			    </div>
			</div>
		`);
	})
	$(".fruit").mouseleave(function(){
		$(".baby2").hide();
	})
	
	
	/*轮播图*/
	var timer = setInterval(lunbotu,2000);
	var index = 0;
	function lunbotu(){
		index++;
		if( index == 6 ){
			index = 0;
		}
		$(".lunbo2 li").eq(index)
			           .css("background","red")
			           //.addClass(".current")
			           .siblings()
			           .css({"background":"black","opacity":"0.5"})
			           //.removeClass(".current");
		$(".lunbo li").eq(index)
		              .fadeIn(1000)
		              .siblings()
		              .fadeOut(1000);
		/*$(".lunbo2 li").mouseover(function(){
			/*$(this).css("background","red");
			       .siblings()
			       .css({"background":"black","opacity":"0.5"})
			$(".lunbo li").eq($(this).index())
			              .css("display","block")
			              .siblings()
			              .css("display","none");
		})*/
		
	/*$(".lunbo2 li").hover(function(){
			clearInterval(timer);
			$(".lunbo li").eq($(this).index())
						  .fadeIn(500)
						  .siblings()
						  .fadeOut(1000);
			$(this).eq(index)
				   .css("background","red")
				 //.addClass(".current")
		           .siblings()
				 //.removeClass(".current")
				 .css({"background":"black","opacity":"0.5"})
		},function(){
			timer = setInterval(lunbotu,2000);
		})*/
	}
	$(".lunbo2 li").eq(0)
			 	   .css("background","red");
			 	   
	/*所有分类*/
	$(".black").hover(function(){
		$(this).find(".zicaidan")
			   .show();
	},function(){
		$(this).find(".zicaidan")
			   .hide();
	})
	
	/*手机*/
	$(".shouji").hover(function(){
		$(this).find(".erweima")
		       .show();
	},function(){
		$(this).find(".erweima")
			   .hide();
	})
	
	/*top购物车*/
	$(".gouwuche a").hover(function(){
		$(this).css("background","#ebebeb");
	},function(){
		$(this).css("background","#fff");
	})
	
	/*子菜单*/
	$(".liebiao").hover(function(){
		$(this).find(".nav2")
               .show();
        $(this).find(".sj")
               .hide();
        $(this).find(".sj2")
        	   .show();
	},function(){
		$(this).find(".nav2")
			   .hide();
	    $(this).find(".sj2")
	    	   .hide();
	    $(this).find(".sj")
	           .show();
	})
	
	/*更多*/
	$(".last").hover(function(){
		$(this).find(".nav3")
               .show();
        $(this).find(".sj")
               .hide();
        $(this).find(".sj2")
        	   .show();
	},function(){
		$(this).find(".nav3")
			   .hide();
	    $(this).find(".sj2")
	    	   .hide();
	    $(this).find(".sj")
	           .show();
	})
	
	/*a标签*/
	$(".right>li a").hover(function(){
		$(this).css("color","red");
	},function(){
		$(this).css("color","#686560");
	})
}
