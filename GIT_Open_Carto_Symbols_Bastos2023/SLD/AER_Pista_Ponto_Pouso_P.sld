<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.1.0">
  <NamedLayer>
    <se:Name>AER_Pista_Ponto_Pouso_P</se:Name>
    <UserStyle>
      <se:Name>AER_Pista_Ponto_Pouso_P</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Single symbol</se:Name>
          <se:PointSymbolizer>
            <se:Graphic>
              <!--Parametric SVG-->
              <se:ExternalGraphic>
                <se:OnlineResource xlink:href="https://raw.githubusercontent.com/Labgeolivre-UFPR/Open_Carto_Symbols/bc7900cf83c88caf68859758efeea6f7c8ad139c/GIT_Open_Carto_Symbols_Bastos2023/SVG/Pista_Ponto_Pouso.svg" xlink:type="simple"/>
                <se:Format>image/svg+xml</se:Format>
              </se:ExternalGraphic>              
              <se:Size>12</se:Size>
            </se:Graphic>
          </se:PointSymbolizer>
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>