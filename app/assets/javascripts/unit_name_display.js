// 単元名表示
$(function(){
  function buildHTML_1_m_ts(){
    var html = `
              <div class='form-check form-check-inline'>
                <input id="unit1" class="form-check-input" type="radio" value="なかまづくりとかず" name="image[unit]" />
                <label class="form-check-label" for="unit1">なかまづくりとかず</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit2" class="form-check-input" type="radio" value="なんばんめ" name="image[unit]" />
                <label class="form-check-label" for="unit2">なんばんめ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit3" class="form-check-input" type="radio" value="いくつといくつ" name="image[unit]" />
                <label class="form-check-label" for="unit3">いくつといくつ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit4" class="form-check-input" type="radio" value="あわせていくつ ふえるといくつ" name="image[unit]" />
                <label class="form-check-label" for="unit4">あわせていくつ ふえるといくつ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit5" class="form-check-input" type="radio" value="のこりはいくつ ちがいはいくつ" name="image[unit]" />
                <label class="form-check-label" for="unit5">のこりはいくつ ちがいはいくつ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit6" class="form-check-input" type="radio" value="１０よりおおきいかず" name="image[unit]" />
                <label class="form-check-label" for="unit6">１０よりおおきいかず</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit7" class="form-check-input" type="radio" value="なんじ なんじはん" name="image[unit]" />
                <label class="form-check-label" for="unit7">なんじ なんじはん</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit8" class="form-check-input" type="radio" value="どちらがながい" name="image[unit]" />
                <label class="form-check-label" for="unit8">どちらがながい</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit9" class="form-check-input" type="radio" value="３つのかずのけいさん" name="image[unit]" />
                <label class="form-check-label" for="unit9">３つのかずのけいさん</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit10" class="form-check-input" type="radio" value="どちらがおおい" name="image[unit]" />
                <label class="form-check-label" for="unit10">どちらがおおい</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit11" class="form-check-input" type="radio" value="たしざん" name="image[unit]" />
                <label class="form-check-label" for="unit11">たしざん</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit12" class="form-check-input" type="radio" value="かたちあそび" name="image[unit]" />
                <label class="form-check-label" for="unit12">かたちあそび</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit13" class="form-check-input" type="radio" value="ひきざん" name="image[unit]" />
                <label class="form-check-label" for="unit13">ひきざん</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit14" class="form-check-input" type="radio" value="どちらがひろい" name="image[unit]" />
                <label class="form-check-label" for="unit14">どちらがひろい</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit15" class="form-check-input" type="radio" value="おおきいかず" name="image[unit]" />
                <label class="form-check-label" for="unit15">おおきいかず</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit16" class="form-check-input" type="radio" value="なんじなんぷん" name="image[unit]" />
                <label class="form-check-label" for="unit16">なんじなんぷん</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit17" class="form-check-input" type="radio" value="ずをつかってかんがえよう" name="image[unit]" />
                <label class="form-check-label" for="unit17">ずをつかってかんがえよう</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit18" class="form-check-input" type="radio" value="かたちづくり" name="image[unit]" />
                <label class="form-check-label" for="unit18">かたちづくり</label>
              </div>
              `
    return html;
  }

  function buildHTML_2_m_ts(){
    var html = `
              <div class='form-check form-check-inline'>
                <input id="unit1" class="form-check-input" type="radio" value="ひょうと グラフ" name="image[unit]" />
                <label class="form-check-label" for="unit1">ひょうと グラフ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit2" class="form-check-input" type="radio" value="たし算の ひっ算" name="image[unit]" />
                <label class="form-check-label" for="unit2">たし算の ひっ算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit3" class="form-check-input" type="radio" value="ひき算の ひっ算" name="image[unit]" />
                <label class="form-check-label" for="unit3">ひき算の ひっ算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit4" class="form-check-input" type="radio" value="長さの たんい" name="image[unit]" />
                <label class="form-check-label" for="unit4">長さの たんい</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit5" class="form-check-input" type="radio" value="３けたの 数" name="image[unit]" />
                <label class="form-check-label" for="unit5">３けたの 数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit6" class="form-check-input" type="radio" value="水の かさの たんい" name="image[unit]" />
                <label class="form-check-label" for="unit6">水の かさの たんい</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit7" class="form-check-input" type="radio" value="時こくと 時間" name="image[unit]" />
                <label class="form-check-label" for="unit7">時こくと 時間</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit8" class="form-check-input" type="radio" value="計算の くふう" name="image[unit]" />
                <label class="form-check-label" for="unit8">計算の くふう</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit9" class="form-check-input" type="radio" value="たし算と ひき算の ひっ算" name="image[unit]" />
                <label class="form-check-label" for="unit9">たし算と ひき算の ひっ算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit10" class="form-check-input" type="radio" value="長方形と 正方形" name="image[unit]" />
                <label class="form-check-label" for="unit10">長方形と 正方形</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit11" class="form-check-input" type="radio" value="かけ算(1)" name="image[unit]" />
                <label class="form-check-label" for="unit11">かけ算(1)</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit12" class="form-check-input" type="radio" value="かけ算(2)" name="image[unit]" />
                <label class="form-check-label" for="unit12">かけ算(2)</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit13" class="form-check-input" type="radio" value="４けたの 数" name="image[unit]" />
                <label class="form-check-label" for="unit13">４けたの 数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit14" class="form-check-input" type="radio" value="長い ものの 長さの たんい" name="image[unit]" />
                <label class="form-check-label" for="unit14">長い ものの 長さの たんい</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit15" class="form-check-input" type="radio" value="たし算と ひき算" name="image[unit]" />
                <label class="form-check-label" for="unit15">たし算と ひき算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit16" class="form-check-input" type="radio" value="分数" name="image[unit]" />
                <label class="form-check-label" for="unit16">分数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit17" class="form-check-input" type="radio" value="はこの 形" name="image[unit]" />
                <label class="form-check-label" for="unit17">はこの 形</label>
              </div>
              `
    return html;
  }

  function buildHTML_3_m_ts(){
    var html = `
              <div class='form-check form-check-inline'>
                <input id="unit1" class="form-check-input" type="radio" value="かけ算" name="image[unit]" />
                <label class="form-check-label" for="unit1">かけ算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit2" class="form-check-input" type="radio" value="時こくと時間のもとめ方" name="image[unit]" />
                <label class="form-check-label" for="unit2">時こくと時間のもとめ方</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit3" class="form-check-input" type="radio" value="長いものの長さのはかり方" name="image[unit]" />
                <label class="form-check-label" for="unit3">長いものの長さのはかり方</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit4" class="form-check-input" type="radio" value="わり算" name="image[unit]" />
                <label class="form-check-label" for="unit4">わり算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit5" class="form-check-input" type="radio" value="たし算とひき算の筆算" name="image[unit]" />
                <label class="form-check-label" for="unit5">たし算とひき算の筆算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit6" class="form-check-input" type="radio" value="暗算" name="image[unit]" />
                <label class="form-check-label" for="unit6">暗算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit7" class="form-check-input" type="radio" value="あまりのあるわり算" name="image[unit]" />
                <label class="form-check-label" for="unit7">あまりのあるわり算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit8" class="form-check-input" type="radio" value="大きい数のしくみ" name="image[unit]" />
                <label class="form-check-label" for="unit8">大きい数のしくみ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit9" class="form-check-input" type="radio" value="かけ算の筆算(1)" name="image[unit]" />
                <label class="form-check-label" for="unit9">かけ算の筆算(1)</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit10" class="form-check-input" type="radio" value="大きい数のわり算" name="image[unit]" />
                <label class="form-check-label" for="unit10">大きい数のわり算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit11" class="form-check-input" type="radio" value="小数" name="image[unit]" />
                <label class="form-check-label" for="unit11">小数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit12" class="form-check-input" type="radio" value="重さのたんいとはかり方" name="image[unit]" />
                <label class="form-check-label" for="unit12">重さのたんいとはかり方</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit13" class="form-check-input" type="radio" value="円と球" name="image[unit]" />
                <label class="form-check-label" for="unit13">円と球</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit14" class="form-check-input" type="radio" value="分数" name="image[unit]" />
                <label class="form-check-label" for="unit14">分数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit15" class="form-check-input" type="radio" value="□を使った式" name="image[unit]" />
                <label class="form-check-label" for="unit15">□を使った式</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit16" class="form-check-input" type="radio" value="かけ算の筆算(2)" name="image[unit]" />
                <label class="form-check-label" for="unit16">かけ算の筆算(2)</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit17" class="form-check-input" type="radio" value="三角形" name="image[unit]" />
                <label class="form-check-label" for="unit17">三角形</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit18" class="form-check-input" type="radio" value="ぼうグラフと表" name="image[unit]" />
                <label class="form-check-label" for="unit18">ぼうグラフと表</label>
              </div>
              `
    return html;
  }

  function buildHTML_4_m_ts(){
    var html = `
              <div class='form-check form-check-inline'>
                <input id="unit1" class="form-check-input" type="radio" value="折れ線グラフと表" name="image[unit]" />
                <label class="form-check-label" for="unit1">折れ線グラフと表</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit2" class="form-check-input" type="radio" value="角の大きさ" name="image[unit]" />
                <label class="form-check-label" for="unit2">角の大きさ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit3" class="form-check-input" type="radio" value="わり算の筆算(1)" name="image[unit]" />
                <label class="form-check-label" for="unit3">わり算の筆算(1)</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit4" class="form-check-input" type="radio" value="垂直・平行と四角形" name="image[unit]" />
                <label class="form-check-label" for="unit4">垂直・平行と四角形</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit5" class="form-check-input" type="radio" value="大きい数のしくみ" name="image[unit]" />
                <label class="form-check-label" for="unit5">大きい数のしくみ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit6" class="form-check-input" type="radio" value="わり算の筆算(2)" name="image[unit]" />
                <label class="form-check-label" for="unit6">わり算の筆算(2)</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit7" class="form-check-input" type="radio" value="がい数の表し方" name="image[unit]" />
                <label class="form-check-label" for="unit7">がい数の表し方</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit8" class="form-check-input" type="radio" value="計算のきまり" name="image[unit]" />
                <label class="form-check-label" for="unit8">計算のきまり</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit9" class="form-check-input" type="radio" value="面積のはかり方と表し方" name="image[unit]" />
                <label class="form-check-label" for="unit9">面積のはかり方と表し方</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit10" class="form-check-input" type="radio" value="小数のしくみ" name="image[unit]" />
                <label class="form-check-label" for="unit10">小数のしくみ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit11" class="form-check-input" type="radio" value="変わり方調べ" name="image[unit]" />
                <label class="form-check-label" for="unit11">変わり方調べ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit12" class="form-check-input" type="radio" value="小数のかけ算とわり算" name="image[unit]" />
                <label class="form-check-label" for="unit12">小数のかけ算とわり算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit13" class="form-check-input" type="radio" value="分数" name="image[unit]" />
                <label class="form-check-label" for="unit13">分数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit14" class="form-check-input" type="radio" value="直方体と立方体" name="image[unit]" />
                <label class="form-check-label" for="unit14">直方体と立方体</label>
              </div>
              `
    return html;
  }

  function buildHTML_5_m_ts(){
    var html = `
              <div class='form-check form-check-inline'>
                <input id="unit1" class="form-check-input" type="radio" value="整数と小数" name="image[unit]" />
                <label class="form-check-label" for="unit1">整数と小数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit2" class="form-check-input" type="radio" value="直方体や立方体の
                体積" name="image[unit]" />
                <label class="form-check-label" for="unit2">直方体や立方体の
                体積</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit3" class="form-check-input" type="radio" value="比例" name="image[unit]" />
                <label class="form-check-label" for="unit3">比例</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit4" class="form-check-input" type="radio" value="小数のかけ算" name="image[unit]" />
                <label class="form-check-label" for="unit4">小数のかけ算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit5" class="form-check-input" type="radio" value="小数のわり算" name="image[unit]" />
                <label class="form-check-label" for="unit5">小数のわり算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit6" class="form-check-input" type="radio" value="合同な図形" name="image[unit]" />
                <label class="form-check-label" for="unit6">合同な図形</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit7" class="form-check-input" type="radio" value="偶数と奇数，倍数と
                約数" name="image[unit]" />
                <label class="form-check-label" for="unit7">偶数と奇数，倍数と
                約数</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit8" class="form-check-input" type="radio" value="分数と小数，整数
                の関係" name="image[unit]" />
                <label class="form-check-label" for="unit8">分数と小数，整数
                の関係</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit9" class="form-check-input" type="radio" value="分数のたし算とひ
                き算" name="image[unit]" />
                <label class="form-check-label" for="unit9">分数のたし算とひ
                き算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit10" class="form-check-input" type="radio" value="単位量あたりの大
                きさ" name="image[unit]" />
                <label class="form-check-label" for="unit10">単位量あたりの大
                きさ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit11" class="form-check-input" type="radio" value="図形の角 " name="image[unit]" />
                <label class="form-check-label" for="unit11">図形の角 </label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit12" class="form-check-input" type="radio" value="四角形と三角形
                の面積" name="image[unit]" />
                <label class="form-check-label" for="unit12">四角形と三角形
                の面積</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit13" class="form-check-input" type="radio" value="百分率とグラフ " name="image[unit]" />
                <label class="form-check-label" for="unit13">百分率とグラフ </label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit14" class="form-check-input" type="radio" value="正多角形と円周
                の長さ" name="image[unit]" />
                <label class="form-check-label" for="unit14">正多角形と円周
                の長さ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit15" class="form-check-input" type="radio" value="分数のかけ算と
                わり算" name="image[unit]" />
                <label class="form-check-label" for="unit15">分数のかけ算と
                わり算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit16" class="form-check-input" type="radio" value="角柱と円柱" name="image[unit]" />
                <label class="form-check-label" for="unit16">角柱と円柱</label>
              </div>
              `
    return html;
  }

  function buildHTML_6_m_ts(){
    var html = `
              <div class='form-check form-check-inline'>
                <input id="unit1" class="form-check-input" type="radio" value="対称な図形" name="image[unit]" />
                <label class="form-check-label" for="unit1">対称な図形</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit2" class="form-check-input" type="radio" value="円の面積" name="image[unit]" />
                <label class="form-check-label" for="unit2">円の面積</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit3" class="form-check-input" type="radio" value="文字と式" name="image[unit]" />
                <label class="form-check-label" for="unit3">文字と式</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit4" class="form-check-input" type="radio" value="分数のかけ算" name="image[unit]" />
                <label class="form-check-label" for="unit4">分数のかけ算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit5" class="form-check-input" type="radio" value="分数のわり算" name="image[unit]" />
                <label class="form-check-label" for="unit5">分数のわり算</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit6" class="form-check-input" type="radio" value="角柱と円柱の体積" name="image[unit]" />
                <label class="form-check-label" for="unit6">角柱と円柱の体積</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit7" class="form-check-input" type="radio" value="およその面積や体
                積" name="image[unit]" />
                <label class="form-check-label" for="unit7">およその面積や体
                積</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit8" class="form-check-input" type="radio" value="比と比の値" name="image[unit]" />
                <label class="form-check-label" for="unit8">比と比の値</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit9" class="form-check-input" type="radio" value="拡大図と縮図" name="image[unit]" />
                <label class="form-check-label" for="unit9">拡大図と縮図</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit10" class="form-check-input" type="radio" value="速さ" name="image[unit]" />
                <label class="form-check-label" for="unit10">速さ</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit11" class="form-check-input" type="radio" value="比例と反比例" name="image[unit]" />
                <label class="form-check-label" for="unit11">比例と反比例</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit12" class="form-check-input" type="radio" value="並べ方と組み合
                わせ方" name="image[unit]" />
                <label class="form-check-label" for="unit12">並べ方と組み合
                わせ方</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit13" class="form-check-input" type="radio" value="資料の調べ方" name="image[unit]" />
                <label class="form-check-label" for="unit13">資料の調べ方</label>
              </div>

              <div class='form-check form-check-inline'>
                <input id="unit14" class="form-check-input" type="radio" value="量の単位のしくみ" name="image[unit]" />
                <label class="form-check-label" for="unit14">量の単位のしくみ</label>
              </div>
              `
    return html;
  }

  $("#unit_select").on("click", function(){

    var grade = $("input[name ='image[grade]']:checked").val();
    var subject = $("input[name ='image[subject]']:checked").val();
    var textbook_company = $("input[name ='image[textbook_company]']:checked").val();

    if(grade=="１年生" && subject=="算数" && textbook_company=="東京書籍"){

      var html = buildHTML_1_m_ts();
      // console.log(html)
      $('.form_unit').empty();
      $('.form_unit').append(html);
    }

    if(grade=="２年生" && subject=="算数" && textbook_company=="東京書籍"){

      var html = buildHTML_2_m_ts();
      // console.log(html)
      $('.form_unit').empty();
      $('.form_unit').append(html)
    }

    if(grade=="３年生" && subject=="算数" && textbook_company=="東京書籍"){

      var html = buildHTML_3_m_ts();
      // console.log(html)
      $('.form_unit').empty();
      $('.form_unit').append(html)
    }

    if(grade=="４年生" && subject=="算数" && textbook_company=="東京書籍"){

      var html = buildHTML_4_m_ts();
      // console.log(html)
      $('.form_unit').empty();
      $('.form_unit').append(html)
    }

    if(grade=="５年生" && subject=="算数" && textbook_company=="東京書籍"){

      var html = buildHTML_5_m_ts();
      // console.log(html)
      $('.form_unit').empty();
      $('.form_unit').append(html)
    }

    if(grade=="６年生" && subject=="算数" && textbook_company=="東京書籍"){

      var html = buildHTML_6_m_ts();
      // console.log(html)
      $('.form_unit').empty();
      $('.form_unit').append(html)
    }
  })
})
