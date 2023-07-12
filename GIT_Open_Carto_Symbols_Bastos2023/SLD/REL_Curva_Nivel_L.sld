<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:se="http://www.opengis.net/se" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.1.0">
  <NamedLayer>
    <se:Name>REL_Curva_Nivel_L</se:Name>
    <UserStyle>
      <se:Name>REL_Curva_Nivel_L</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Mestra</se:Name>
          <se:Description>
            <se:Title>Mestra</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>indice</ogc:PropertyName>
              <ogc:Literal>Mestra</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#705714</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0.6</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">square</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
          <se:TextSymbolizer>
            <se:Label>
              <ogc:PropertyName>cota</ogc:PropertyName>
            </se:Label>
            <se:Font>
              <se:SvgParameter name="font-family">Century Gothic</se:SvgParameter>
              <se:SvgParameter name="font-size">8</se:SvgParameter>
              <se:SvgParameter name="font-style">italic</se:SvgParameter>
              <se:SvgParameter name="font-weight">bold</se:SvgParameter>
            </se:Font>
            <se:LabelPlacement>
              <se:LinePlacement>
                <se:GeneralizeLine>true</se:GeneralizeLine>
              </se:LinePlacement>
            </se:LabelPlacement>
            <se:Halo>
              <se:Radius>0.7</se:Radius>
              <se:Fill>
                <se:SvgParameter name="fill">#ffffff</se:SvgParameter>
              </se:Fill>
            </se:Halo>
            <se:Fill>
              <se:SvgParameter name="fill">#705714</se:SvgParameter>
            </se:Fill>
          </se:TextSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Normal</se:Name>
          <se:Description>
            <se:Title>Normal</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>indice</ogc:PropertyName>
              <ogc:Literal>Normal</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:LineSymbolizer>
            <se:Stroke>
              <se:SvgParameter name="stroke">#705714</se:SvgParameter>
              <se:SvgParameter name="stroke-width">0</se:SvgParameter>
              <se:SvgParameter name="stroke-linejoin">bevel</se:SvgParameter>
              <se:SvgParameter name="stroke-linecap">square</se:SvgParameter>
            </se:Stroke>
          </se:LineSymbolizer>
        </se:Rule>
        </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>