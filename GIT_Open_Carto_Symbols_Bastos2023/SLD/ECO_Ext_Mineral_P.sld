<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.1.0">
  <NamedLayer>
    <se:Name>ECO_Ext_Mineral_P</se:Name>
    <UserStyle>
      <se:Name>ECO_Ext_Mineral_P</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Single symbol</se:Name>
          <se:PointSymbolizer>
            <se:Graphic>
            <!--Parametric SVG-->
              <se:ExternalGraphic>
                <se:OnlineResource xlink:href="https://raw.githubusercontent.com/Labgeolivre-UFPR/Open_Carto_Symbols/b16c64485fb8a6d015e66efd5ed5c124acd75f1a/GIT_Open_Carto_Symbols_Bastos2023/SVG/Area_Mineracao.svg" xlink:type="simple"/>
                <se:Format>image/svg+xml</se:Format>
              </se:ExternalGraphic>             
              <se:Size>14</se:Size>
            </se:Graphic>
          </se:PointSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>nome</ogc:PropertyName>
            </se:Label>
            <se:Font>
          	  <se:SvgParameter name="font-family">Century Gothic</se:SvgParameter>
              <se:SvgParameter name="font-size">8</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:PointPlacement>
                <se:AnchorPoint>
                  <se:AnchorPointX>0.5</se:AnchorPointX>
                  <se:AnchorPointY>0.5</se:AnchorPointY>
                </se:AnchorPoint>
                <se:Displacement>
                  <se:DisplacementX>0</se:DisplacementX>
                  <se:DisplacementY>-16</se:DisplacementY>
                </se:Displacement>
              </se:PointPlacement>
            </se:LabelPlacement>
			<se:Halo>
              <se:Radius>1</se:Radius>
              <se:Fill>
                <se:SvgParameter name="fill">#ffffff</se:SvgParameter>
              </se:Fill>
            </se:Halo>
            <se:VendorOption name="maxDisplacement">10</se:VendorOption>
  			<se:VendorOption name="autoWrap">100</se:VendorOption>
          </se:TextSymbolizer>
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>