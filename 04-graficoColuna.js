function desenharGraficos() {
  let tabela = new google.visualization.DataTable();

  tabela.addColumn("string", "categorias");
  tabela.addColumn("number", "valores");

  tabela.addRows([
    ["Educação", 2000],
    ["Transporte", 500],
    ["Lazer", 230],
    ["Saúde", 50],
    ["Cartão de crédito", 900],
    ["Alimentação", 260],
  ]);
  let opcoes = {
    title: "Tipos de Gastos",
    height: 500,
    width: 900,
    is3D: true,
    legend: "labeled",
    pieSliceText: "value",
    //colors: ["grey", "red", "yellow", "blue", "pink", "purple"],
    slices: {
      1: { color: "grey" },
      2: { color: "silver" },
      3: { color: "grey" },
      4: { offset: 0.4 },
      5: { color: "grey" },
    },
  };
  let grafico = new google.visualization.PieChart(
    document.getElementById("graficoPizza")
  );
  grafico.draw(tabela, opcoes);

  tabela = new google.visualization.DataTable();

  tabela.addColumn("string", "mês");
  tabela.addColumn("number", "gastos");

  tabela.addRows([
    ["jan", 800],
    ["fev", 400],
    ["mar", 1100],
    ["abr", 400],
    ["mai", 500],
    ["jun", 750],
    ["jul", 1500],
    ["ago", 650],
    ["set", 850],
    ["out", 400],
    ["nov", 1000],
    ["dez", 720],
  ]);

  opcoes = {
    title: "Gastos por mês",
    width: 650,
    height: 300,
    vAxis: {
      format: "currency",
      gridlines: {
        count: 5,
        color: "transparent",
      },
    },
    curveType: "function",
    legend: "none",
  };

  grafico = new google.visualization.LineChart(
    document.getElementById("graficoLinha")
  );
  grafico.draw(tabela, opcoes);

  tabela = new google.visualization.arrayToDataTable([
    ["Mês", "Entrada", "Saída"],
    ["jan", 2500, 1000],
    ["fev", 2000, 500],
    ["mar", 3000, 1300],
    ["abr", 1500, 1700],
    ["mai", 5000, 2250],
    ["jun", 3567, 3000],
    ["jul", 3452, 1468],
    ["ago", 1833, 5250],
    ["set", 3803, 5500],
    ["out", 1800, 1000],
    ["nov", 3569, 1500],
    ["dez", 3000, 1740],
  ]);

  opcoes = {
    title: "Entradas e saídas da conta",
    height: 400,
    width: 800,
    vAxis: {
      gridlines: { color: "transparent" },
      format: "currency",
      title: "valores",
    },
    hAxis: {
      title: "Mês",
    },
  };

  grafico = new google.visualization.ColumnChart(
    document.getElementById("graficoColuna")
  );
  grafico.draw(tabela, opcoes);

  tabela = new google.visualization.DataTable();

  tabela.addColumn("string", "categoria");
  tabela.addColumn("number", "valores");
  tabela.addColumn({ type: "number", role: "annotation" });

  tabela.addRows([
    ["Educação", 2000, 2000],
    ["Transporte", 500, 500],
    ["Lazer", 230, 230],
    ["Saúde", 50, 50],
    ["Cartão de crédito", 900, 900],
    ["Alimentação", 260, 260],
  ]);

  opcoes = {
    title: "Tipos de gastos",
    height: 400,
    width: 800,
    vAxis: {
      gridlines: { count: 0 },
    },
  };

  grafico = new google.visualization.ColumnChart(
    document.getElementById("graficoColunaB")
  );
  grafico.draw(tabela, opcoes);
}
